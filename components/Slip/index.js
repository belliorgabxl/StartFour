// components/Upload.js
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './slip.module.css';

const Upload = ({ onFileChange }) => {
  const { register, handleSubmit, reset } = useForm();
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }

    // Pass the file to the parent component
    onFileChange && onFileChange(file);
  };

const onSubmit = async (data) => {
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Image uploaded successfully');
      // Clear form data and reset input fields
      setForm({});
      setPreviewImage(null);
      reset();
      router.refresh();
    } else {
      console.error('Image upload failed:', response.statusText);
    }
  } catch (error) {
    console.error('Error during image upload:', error);
  }
};

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.bslip}>
            <label>Payment Slip</label>
            <input
              type="file"
              accept="image/*"
              {...register("imageUrl")}
              onChange={handleFileChange}
            />
            {previewImage && (
              <Image className={styles.img}
                width={200}
                height={200}
                src={previewImage}
                alt="Preview"
              />
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Upload;
