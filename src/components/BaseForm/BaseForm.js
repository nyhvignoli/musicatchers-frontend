import React from 'react';

const BaseForm = () => {
  return (
    <div>
        <p>Base Form</p>
        <div>
            <input type="text" placeholder="e-mail"/>
            <input type="password" placeholder="senha"/>
        </div>
    </div>
  );
}

export default BaseForm;