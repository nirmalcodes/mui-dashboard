import React from 'react';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

const SortableList = ({ listItems = [], children, onEvent }) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) {
      return;
    }

    onEvent((listItems) => {
      const oldIndex = listItems.findIndex(
        (listItem) => listItem.id === active.id
      );
      const newIndex = listItems.findIndex(
        (listItem) => listItem.id === over.id
      );

      return arrayMove(listItems, oldIndex, newIndex);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      <SortableContext items={listItems} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};

export default SortableList;
