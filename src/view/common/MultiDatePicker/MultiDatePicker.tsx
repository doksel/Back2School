import React, {useState} from 'react';

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import styles from './styles.module.scss';

const MultiDatePicker: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [selectedDays, setSelectedDays] = useState<Array<Date>>([]);

  const handleDayClick = (day: Date, { selected }: any) => {
      let selectArray = [...selectedDays];

    if (selected) {
      const selectedIndex = selectArray.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectArray.splice(selectedIndex, 1);
    } else {
        selectArray.push(day);
    }

    setSelectedDays(selectArray);
  }

  return (
    <div>
      <DayPicker
          selectedDays={selectedDays}
          onDayClick={handleDayClick}
        />
    </div>
  )
}

export default MultiDatePicker;
