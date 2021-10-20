import { useRef, useState } from "react"


const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState('#000000')
  const colorRef = useRef();

  return (
    <section>
      <h1>★ useRef hook</h1>
      <h2> Selected color: {selectedColor} </h2>
      <input ref={colorRef} type="color" />
      <button onClick={() => setSelectedColor(colorRef.current.value)}>Select color</button>

    </section>
  )
}

export default SelectColor

/**
 * useRef
 * 
 * Is used to have a mutable value, than can be changing over the time.
 * Take in mind that ref is not going to notify you when the value change
 */