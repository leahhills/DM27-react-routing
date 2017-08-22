import React from 'react';
import { getPerson } from './peopleService.js';

export default function(props) {
  let person = getPerson(props.match.params.id)
  return (
    <div>
      {person.name}
      {person.description}
    </div>
  )
}