interface AuthInputProps {
  notRender?: boolean
  label: string
  type?: 'text' | 'email' | 'password'
  value: any
  required?: boolean
  onChange: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
  return props.notRender ? null : (
    <div className="flex flex-col mt-4">
      <label>{props.label}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        required={props.required}
        onChange={e => props.onChange?.(e.target.value)}
        className="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white"
      />
    </div>
  )
}
