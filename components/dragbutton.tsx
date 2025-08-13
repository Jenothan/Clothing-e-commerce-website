"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

export function DraggableButton() {
  const [pos, setPos] = useState({ x: 20, y: 20 }) // initial position
  const dragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })

  function handleMouseDown(e: React.MouseEvent) {
    dragging.current = true
    dragStart.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    }
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (dragging.current) {
      setPos({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      })
    }
  }

  function handleMouseUp() {
    dragging.current = false
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed cursor-grab"
      style={{
        left: pos.x,
        top: pos.y,
        position: "fixed",
        touchAction: "none",
        zIndex: 1000,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={(e) => {
        const touch = e.touches[0]
        dragging.current = true
        dragStart.current = {
          x: touch.clientX - pos.x,
          y: touch.clientY - pos.y,
        }
      }}
      onTouchMove={(e) => {
        if (dragging.current) {
          const touch = e.touches[0]
          setPos({
            x: touch.clientX - dragStart.current.x,
            y: touch.clientY - dragStart.current.y,
          })
        }
      }}
      onTouchEnd={() => {
        dragging.current = false
      }}
    >
      <User className="h-5 w-5" />
    </Button>
  )
}
