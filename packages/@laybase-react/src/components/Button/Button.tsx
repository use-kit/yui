import * as React from 'react'

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'size' | 'state' | 'radius' | 'fluid' | 'prefix' | 'suffix'
> {
  /**
   * 按钮大小，默认 md；
   * xs - 极小
   * sm - 小
   * md - 默认，中等按钮
   * lg - 大按钮
   */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /**
   * type 按钮类型，primary - 默认实心类型，solid - 线框类型，text - 文本类型
   */
  type?: 'primary' | 'outline' | 'text'
  /**
   * 按钮颜色状态，normal - 正常主题色、warn - 警告，danger - 严重
   */
  state?: 'normal' | 'warn' | 'danger'
  /**
   * disabled 是否禁用
   */
  disabled?: boolean
  /**
   * 是否正在执行加载操作，为 true 会展示Loading图标，并禁止点击相关操作
   */
  loading?: boolean
  /**
   * 是否为圆角按钮
   */
  radius?: boolean
  /**
   * 是否为流体按钮（宽度撑开），默认为 false ，按钮默认宽度是内容撑开的最大宽度
   */
  fluid?: boolean
  /**
   * 按钮左侧元素
   */
  prefix?: React.ReactNode
  /**
   * 按钮右侧元素
   */
  suffix?: React.ReactNode
}

const CLEAR_DEFAULT_STYLE: React.CSSProperties = {
  margin: 0,
  padding: 0,
  border: 'none',
  borderRadius: 0,
  background: 'transparent',
  appearance: 'none',
  WebkitAppearance: 'none',
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    size = 'md',
    type = 'primary',
    state = 'normal',
    disabled = false,
    loading = false,
    radius = false,
    fluid = false,
    prefix,
    suffix,
    style,
    className,
    children,
    ...ext
  } = props

  console.log(size)

  return (
    <button className={className} style={{ ...CLEAR_DEFAULT_STYLE, ...style }} {...ext}>
      {children}
    </button>
  )
}

export default Button
