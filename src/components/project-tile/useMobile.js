import { useEffect, useState } from "react"

const useExtraSmall = () => {
  const [extraSmall, setExtraSmall] = useState(true)

  const handleResize = () => setExtraSmall(window.innerWidth <= 320)

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return extraSmall
}

export default useExtraSmall
