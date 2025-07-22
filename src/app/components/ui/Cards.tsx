'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Backdrop,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { cn } from '@/app/lib/utils';

interface CardProps {
  title: string;
  description?: string;
  label: string;
  type?: 'left' | 'right';
  fullContent?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  label,
  type = 'left',
  fullContent,
}) => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setClosing(false);
  };

  const handleClose = () => {
    setClosing(true);
    // Delay actual close until animation finishes
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300); // match reverse-bloom duration
  };

  return (
    <>
      {/* CARD */}
      <div className="group relative rounded-2xl cursor-pointer transition-all duration-300">
        <div
          className={cn(
            'relative rounded-2xl p-[2px] transition-all duration-300',
            'bg-gray-100',
            'group-hover:shadow-[0_0_0_4px_rgba(255,255,255,0.3)]',
            'group-hover:bg-gradient-to-br',
            type === 'left'
              ? 'group-hover:from-purple-400 group-hover:to-blue-300'
              : 'group-hover:from-gray-300 group-hover:to-gray-100'
          )}
        >
          <div className="relative h-[300px] rounded-2xl bg-white p-6 overflow-hidden flex flex-col justify-end items-start transition-all duration-300 group-hover:shadow-xl">
            <div className="absolute top-4 left-4 bg-white text-xs px-2 py-1 rounded-md shadow-sm text-gray-600 z-10">
              {label}
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-0 transition-all duration-500 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:opacity-0 transition-opacity duration-500">
                {title}
              </h3>
            </div>

            <div className="transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-10">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              {description && <p className="text-gray-700 mt-2">{description}</p>}
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button
                onClick={handleOpen}
                className="pointer-events-auto bg-black text-white text-sm px-4 py-2 rounded-md opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
              >
                View more →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DIALOG */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        // Turn off default transitions
        style={{ borderRadius: '1rem' }}
        keepMounted
        BackdropComponent={Backdrop}
        BackdropProps={{
          className: 'backdrop-blur-sm bg-black/30',
        }}
        PaperProps={{
          className: cn(
            'rounded-2xl p-6 backdrop-blur-md bg-white/40 border border-white/30 shadow-xl',
            closing ? 'animate-reverse-bloom' : 'animate-bloom'
          ),
        }}
      >
        <div className="flex justify-between items-center mb-2">
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <IconButton onClick={handleClose} className="text-gray-500 hover:text-black">
            <CloseIcon />
          </IconButton>
        </div>
        <DialogContent>
          {fullContent || (
            <p className="text-gray-700">{description || 'More details coming soon.'}</p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Card;
