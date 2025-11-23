import React, { useState } from 'react';
import TextInput from '../components/TextInput.jsx';
import TextArea from '../components/TextArea.jsx';
import FileDropzone from '../components/FileDropzone.jsx';
import { cardSpecs, textHeading2, textHeading3 } from '../data/uiStyle.js';
import Button from '../components/Button.jsx';

const Form = () => {
  const [form, setForm] = useState({ projectName: '', ownerName: '', email: '', phone: '', objective: '', features: '', designRef: '', notes: '' });
    
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState([]);
    
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
    
  function validate() {
    const errs = [];
    if (!form.projectName.trim()) errs.push('Nama project wajib diisi');
    if (!form.ownerName.trim()) errs.push('Nama pemilik project wajib diisi');
    if (!form.email.trim()) errs.push('Email wajib diisi');

    // basic email pattern
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (form.email && !emailPattern.test(form.email)) errs.push('Format email tidak valid');

    // phone optional but if present check digits
    const phonePattern = /^[0-9+()\-\s]{6,20}$/;
    if (form.phone && !phonePattern.test(form.phone)) errs.push('Format nomor telepon tidak valid');
    
    // files: ensure sizes still within limit (defensive)
    const tooLarge = files.filter((f) => f.size > 20 * 1024 * 1024);
    if (tooLarge.length) errs.push(`Ada file lebih besar dari 20MB: ${tooLarge.map((f) => f.name).join(', ')}`);
    
    setErrors(errs);
      return errs.length === 0;
    }
    
    function handleSubmit(e) {
      e.preventDefault();
      if (!validate()) return;
    
      // Prepare data for submission
      const payload = {
        ...form,
        files: files.map((f) => ({ name: f.name, size: f.size, type: f.file.type })),
      };
       
      // In production you would send this to your API.
      console.log('Project brief submitted:', payload);
      console.log('Files (raw File objects):', files.map((f) => f.file));

    }

  return (
    <div className="max-w-[1140px] flex flex-col gap-y-8 mx-auto p-4">

      <div className="space-y-3">
        <h1 className={textHeading2}>Client Dashboard</h1>
        <div className="text-[15px] text-justify leading-relaxed px-4 py-3 rounded-md bg-[#202020] pr-4 space-y-3">
          <div className="">
            Halaman ini menjadi pusat kerja sama kita selama proyek berlangsung. Anda dapat membuat jadwal pertemuan online bersama kami, mengirimkan project brief, meninjau hasil desain UI/UX yang sudah dibuat, memberikan feedback secara terstruktur, dan memantau perkembangan proyek melalui progress bar dari tahap awal sampai proses finishing. Semua dibuat agar komunikasi jelas, alur kerja rapi, dan proyek berjalan tanpa hambatan.
          </div>
          <div className="">
            Simpan tautan ini karena menjadi akses utama Anda selama proses pengerjaan proyek. Kami juga telah mengirimkan tautan halaman ini ke email Anda. Jika Anda merasa memasukkan email yang kurang tepat, silakan gunakan tombol di bawah untuk memperbarui email, dan kami akan mengirimkan tautan ini kembali ke alamat yang benar.
          </div>
          <div className="">
            Jika Anda memiliki pertanyaan lain, Anda dapat menghubungi kami melalui tombol bantuan di bawah.
          </div>
          <div className="flex flex-col md:flex-row gap-3 pt-2 pb-2">
            <Button label='Kirim Pesan Whatsapp' />
            <Button label='Kirim Pesan Email' />
            <Button label='Ganti Email Baru' />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-3 w-full">
          <div className={`bg-[#202020] px-3 py-2 rounded-md flex justify-between w-full`}>
            <div className="text-[14px] text-white/60">Invoice ID</div>
            <div className="text-[14px] font-semibold">10101010</div>
          </div>
          <div className={`bg-[#202020] px-3 py-2 rounded-md flex justify-between w-full`}>
            <div className="text-[14px] text-white/60">Your Email</div>
            <div className="text-[14px] font-semibold">client@mail.com</div>
          </div>
          <div className={`bg-[#202020] px-3 py-2 rounded-md flex justify-between w-full`}>
            <div className="text-[14px] text-white/60">Your Plan</div>
            <div className="text-[14px] font-semibold">Plan 1 - Landing Page</div>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className={textHeading3}>Important Links and Notes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-3 w-full">
          <div className={`bg-[#202020] flex items-center py-2 pl-3 pr-2 rounded-md flex justify-between w-full`}>
            <div className="text-[14px] text-white/60">Design Draft (Figma)</div>
            <div className="px-2 py-1 rounded bg-blue-500/25 hover:bg-blue-500/40 cursor-pointer text-[14px] font-medium shadow-md shadow-black/20">Link Here</div>
          </div>
          <div className={`bg-[#202020] flex items-center py-2 pl-3 pr-2 rounded-md flex justify-between w-full`}>
            <div className="text-[14px] text-white/60">Meeting Url (Gmeet)</div>
            <div className="px-2 py-1 rounded bg-blue-500/25 hover:bg-blue-500/40 cursor-pointer text-[14px] font-medium shadow-md shadow-black/20">Link Here</div>
          </div>
          <div className={`bg-[#202020] flex items-center py-2 pl-3 pr-2 rounded-md flex justify-between w-full`}>
            <div className="text-[14px] text-white/60">Revision Notes</div>
            <div className="px-2 py-1 rounded bg-blue-500/25 hover:bg-blue-500/40 cursor-pointer text-[14px] font-medium shadow-md shadow-black/20">Link Here</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className={textHeading3}>Brief Project Submission</h3>
        <form onSubmit={handleSubmit} className="space-y-3">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <TextInput label="Nama Project" id="projectName" value={form.projectName} onChange={handleChange} placeholder="Contoh: Website e-commerce" required />
            <TextInput label="Nama Pemilik Project" id="ownerName" value={form.ownerName} onChange={handleChange} placeholder="Nama klien atau perusahaan" required />
            <TextInput label="Email" id="email" type="email" value={form.email} onChange={handleChange} placeholder="email@domain.com" required />
            <TextInput label="Nomor Telepon" id="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="0812xxxx atau +62..." />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <TextArea label="Tujuan Project" id="objective" value={form.objective} onChange={handleChange} placeholder="Jelaskan tujuan utama project" rows={4} />
            <TextArea label="Kebutuhan Fitur" id="features" value={form.features} onChange={handleChange} placeholder="Daftar fitur yang dibutuhkan (bullet points)" rows={4} />
            <TextArea label="Referensi Desain" id="designRef" value={form.designRef} onChange={handleChange} placeholder="Link atau deskripsi referensi desain" rows={3} />
            <TextArea label="Notes Tambahan" id="notes" value={form.notes} onChange={handleChange} placeholder="Informasi tambahan, deadline, budget indikatif" rows={3} />
          </div>

          <FileDropzone files={files} setFiles={setFiles} />

          {errors.length > 0 && (
            <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
              <ul className="list-disc pl-5">
                {errors.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex w-full pt-1">
            <Button label='Submit Brief' width='w-full' />
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Form