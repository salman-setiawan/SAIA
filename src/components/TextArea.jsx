import React from 'react'

const TextArea = ({ label, id, value, onChange, placeholder = '', rows = 5 }) => {
  const formBase = "flex flex-col text-sm px-3 py-2 bg-white dark:bg-neutral-800 rounded-md gap-y-0.5 border border-neutral-200 dark:border-neutral-700/70"
  const titleForm = "text-xs text-neutral-700 dark:text-neutral-300 font-semibold"
  const inputForm = "w-full py-1 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 focus:outline-none transition-colors"
  return (
    <div className={formBase}>
      <label htmlFor={id} className={titleForm}> {label} </label>
      <textarea id={id} name={id} rows={rows} value={value} onChange={onChange} placeholder={placeholder} className={inputForm} />
    </div>
  )
}

export default TextArea