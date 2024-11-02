import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Define the prop types for the InputCKEditor component
interface InputCKEditorProps {
  data: string;
  onChange: (event: unknown, editor: unknown) => void;
}

const InputCKEditor: React.FC<InputCKEditorProps> = ({ data, onChange }) => {
  return (
    <div className='mb-3'>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={onChange}
      />
    </div>
  );
};

export default InputCKEditor;
