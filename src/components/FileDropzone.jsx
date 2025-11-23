import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const MAX_SIZE = 20 * 1024 * 1024; // 20MB
const ACCEPTED_EXTENSIONS = [
  '.jpg', '.jpeg', '.png', '.svg', '.pdf', '.zip',
  '.doc', '.docx', '.ppt', '.pptx',
];

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

const FileDropzone = ({ files, setFiles }) => {

  const onDrop = useCallback((acceptedFiles) => {
    const mapped = acceptedFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      name: file.name,
      size: file.size,
      sizeText: formatBytes(file.size),
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
    }));

    setFiles((prev) => {
      const existingIds = new Set(prev.map((f) => f.id));
      const newOnes = mapped.filter((m) => !existingIds.has(m.id));
      return [...prev, ...newOnes];
    });
  }, [setFiles]);

  // custom error messages (tanpa MIME)
  const ERROR_MAP = {
    'file-invalid-type' : 'Format file tidak didukung.',
    'file-too-large' : 'Ukuran file melebihi batas.',
  };

  const onDropRejected = useCallback((rejections) => {
    rejections.forEach((rej) => {
      const file = rej.file;

      rej.errors.forEach((err) => {
        const baseMsg = ERROR_MAP[err.code] || 'File ditolak.';
        console.warn(`${file.name}: ${baseMsg}`);
      });
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } =
    useDropzone({
      onDrop,
      onDropRejected,
      maxSize: MAX_SIZE,
      multiple: true,
      
      // FORMAT BENAR (filter efektif, .exe akan ditolak)
      accept: {
        'image/jpeg': ['.jpg', '.jpeg'],
        'image/png': ['.png'],
        'image/svg+xml': ['.svg'],
        'application/pdf': ['.pdf'],
        'application/zip': ['.zip'],
        'application/msword': ['.doc'],
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
        'application/vnd.ms-powerpoint': ['.ppt'],
        'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      },
    });

  useEffect(() => {
    return () => {
      files.forEach((f) => {
        if (f.preview) URL.revokeObjectURL(f.preview);
      });
    };
  }, [files]);

  const rejectionMessages = fileRejections.flatMap((r) =>
    r.errors.map((e) => ({
      name: r.file.name,
      code: e.code,
      message: ERROR_MAP[e.code] || 'File ditolak.',
    }))
  );

  const formBase = "flex flex-col text-sm px-3 py-2 bg-white dark:bg-neutral-800 rounded-md gap-y-1 border border-neutral-200 dark:border-neutral-700/70";
  const titleForm = "text-xs text-neutral-700 dark:text-neutral-300 font-semibold mb-1.5";

  return (
    <div className={formBase}>
      <label className={titleForm}>Lampiran (opsional)</label>

      <div
        {...getRootProps()}
        className={
          `flex flex-col items-center justify-center min-h-[140px] rounded-md transition-all p-4 cursor-pointer select-none
          ${isDragActive ? 'border border-dashed border-emerald-500 bg-emerald-900/20' : 'border border-dashed border-transparent bg-neutral-800'}
          ${isDragReject ? 'border border-dashed border-red-500 bg-red-900/20' : ''}`
        }
      >
        <input {...getInputProps()} />
        <div className="text-center">
          <p className="text-[14px] text-neutral-400">
            Tarik dan lepas file di sini, atau klik untuk memilih
          </p>
          <p className="mt-1 text-[12px] text-neutral-400">
            Maks 20MB per file. Ekstensi: {ACCEPTED_EXTENSIONS.join(', ')}
          </p>
        </div>
      </div>

      {rejectionMessages.length > 0 && (
        <div className="my-1 rounded-md bg-red-100 p-2 text-[14px] font-medium text-red-800">
          <ul className="list-disc pl-4">
            {rejectionMessages.map((r) => (
              <li key={`${r.name}-${r.code}`}>{`${r.name}: ${r.message}`}</li>
            ))}
          </ul>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((f) => (
            <div key={f.id} className="flex items-center gap-3 rounded-md bg-neutral-700/70 p-2">

              <div className="w-16 h-12 flex-shrink-0 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center">
                {f.preview ? (
                  <img src={f.preview} alt={f.name} className="object-cover w-full h-full" />
                ) : (
                  <div className="text-xs text-gray-500">
                    {f.name.split('.').pop().toUpperCase()}
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-white truncate">{f.name}</div>
                  <div className="text-xs text-gray-500">{f.sizeText}</div>
                </div>
                <div className="text-xs text-gray-500 mt-1 truncate">
                  {f.file.type || 'Unknown type'}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setFiles((prev) => prev.filter((p) => p.id !== f.id))}
                className="flex items-center px-2.5 py-1 rounded-md text-sm text-white bg-red-500/50 hover:bg-red-700/50 cursor-pointer"
              >
                Remove
              </button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileDropzone;
