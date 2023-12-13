import React from 'react'

 const AddStudents = () => {

  const mutation = useMutation(createPhoto, {
    onSuccess: () => {
      queryClient.invalidateQueries('photos');
      console.log('Image created successfully');
      navigate('/photos');
    },
    onError: (error) => {
      console.error('Error creating image:', error.respose.data);
    },
  });

  const [studentData, setStudentData] = useState({
    name: '',
    description: '',
    imageUrl: '',
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    mutation.mutate(studentData);
   // console.log(studentData,(typeof(studentData.imageUrl.name)),(typeof(studentData.imageUrl)),"photooo");
  };

  const handleClose = () => {
    setStudentData({
      name: '',
      description: '',
      imageUrl: {
        name:""
      },
    });
    setShowModal(false);
    navigate('/photos');
  };

  const handleChange = (e) => {
    const { name, value} = e.target;
   // console.log((e.target),"name:",name,"value:",value,files); 
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }  
    ));
  };
  return (
  <><form onSubmit={handleCreate}>
  
    <div className="form-group">
      <label htmlFor="name ">Name:</label>
      <input
        type="text" 
        className="form-control"
        id="name"
        name="name"
        value={studentData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="description">Description:</label>
      <textarea
        className="form-control"
        id="description"
        name="description"
        value={studentData.description}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="imageUrl">Upload Image:</label>
      <input
        type="file"
        className="form-control bg-primary"
        id="imageUrl"
        name="imageUrl"
        accept="image/*"
        //value={studentData.imageUrl}
        onChange={handleChangePhoto}
        required
      />
    </div>
   
    <Button type="submit" variant="primary">
      Create Image
    </Button>
 
</form></>
  )
}
 export default AddStudents