import React, { useState } from 'react'

const useCart = () => {
    const [value, setValue] = useState(false);

    const onClick = () => setValue(!value)

  return [value, onClick]
}

export default useCart