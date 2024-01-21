'use client';

// DatePicker.tsx
import React, { type ChangeEvent } from 'react';
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import { Calendar } from '../calendar';

interface DatePickerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T, object>;
  label?: string;
  description?: string;
}

function DatePicker<T extends FieldValues>({
  name,
  control,
  label,
  description,
}: DatePickerProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col">
          {label && <label>{label}</label>}
          <Calendar
            selected={field.value}
            onSelect={(selectedDate: Date | undefined) => {
              if (selectedDate) {
                const fakeEvent = {
                  target: {
                    name: field.name,
                    value: selectedDate,
                  },
                };
                field.onChange(fakeEvent as unknown as ChangeEvent<Element>);
              }
            }}
          />
          {description && <p>{description}</p>}
        </div>
      )}
    />
  );
}

export { DatePicker };
