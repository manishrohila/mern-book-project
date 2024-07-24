import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput, Select, Textarea } from 'flowbite-react';

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl } = useLoaderData();
  const bookcategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Romance",
    "Biography",
    "Self-Help",
    "History",
    "Thriller",
    "Horror",
    "Children's",
    "Young Adult",
    "Science",
    "Business",
    "Cooking",
    "Art",
    "Travel",
    "Religion",
    "Poetry",
    "Reference",
    "Comics",
    "Health",
    "Sports",
    "Technology",
    "Music",
    "Education",
    "Psychology",
    "Philosophy",
    "Drama"
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookcategories[0]);
  const handleChangeSelectedValue = (event) => {
    //console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const imageUrl = form.imageUrl.value;
    const authorName = form.authorName.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updateBookObj = {
      bookTitle, imageUrl, authorName, bookDescription, bookPdfUrl
    }
    //console.log(bookObj);

    fetch(`http://localhost:3000/book/${id}`,{
      method:'PATCH',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(updateBookObj)
    }).then(res=>res.json()).then(data=>{
      alert('Book is updated successfully')
    })
    


  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1080px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>

            <div className="mb-2 block">
              <Label
                htmlFor="bookTitle"
                value="Book Title"
              />
            </div>
            <TextInput
              id="bookTitle"
              name='bookTitle'
              placeholder="book name"
              required
              type="text"
              defaultValue={bookTitle}
            />

          </div>

          {/* author name */}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <div className="mb-2 block">
                <Label
                  htmlFor="authorName"
                  value="Author Name"
                />
              </div>
              <TextInput
                id="authorName"
                name='authorName'
                placeholder="Author name"
                required
                type="text"
                defaultValue={authorName}
              />
            </div>
          </div>

        </div>
        {/* Second row */}
        {/* image url*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <div className="mb-2 block">
                <Label
                  htmlFor="imageUrl"
                  value="Book Image URL"
                />
              </div>
              <TextInput
                id="imageUrl"
                name='imageUrl'
                placeholder="Book Image URL"
                required
                type="text"
                defaultValue={imageUrl}
              />
            </div>
          </div>

          {/* category */}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <div className="mb-2 block">
                <Label
                  htmlFor="inputState"
                  value="Book Category"
                />
              </div>
              <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                {
                  bookcategories.map((option) => <option key={option} value={option}>{option}</option>)
                }
              </Select>

            </div>
          </div>

        </div>
        {/* book Description */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookDescription"
              value="book Description"
            />
          </div>
          <Textarea
            id='bookDescription'
            name='bookDescription'
            placeholder='Write your book description...'
            required
            rows={6} 
            defaultValue={bookDescription}
            className='w-full'>

          </Textarea>
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookPdfUrl"
              value="Book PDF URL"
            />
          </div>
          <TextInput
            id="bookPdfUrl"
            name='bookPdfUrl'
            placeholder="book Pdf Url"
            required
            type="text"
            defaultValue={bookPdfUrl}
          />
        </div>
        <Button type='submit' className='mt-5'>
          Update Book
        </Button>

      </form>
    </div>
  )
}

export default EditBooks
