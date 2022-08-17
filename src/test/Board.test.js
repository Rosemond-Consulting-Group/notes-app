import { render, screen, fireEvent } from '@testing-library/react';
import Board from '../components/Board';

//check for header
test('renders header', () => {
  render(<Board />);
  const headerElement = screen.getByText(/Notes App/i);
  expect(headerElement).toBeInTheDocument();
});


//check for footer
test('renders footer', () => {
  render(<Board />);
  const footerElement = screen.getByText(/Copyright/i);
  expect(footerElement).toBeInTheDocument();
});

//check for button
test('renders add button', () => {
  render(<Board />);
  const addBtnElement = screen.getByRole('button', { name: 'Add' })
  expect(addBtnElement).toBeInTheDocument();

});


//check clicking add button renders new note
test('check adding a note', () => {
  render(<Board />);
  const addBtnElement = screen.getByRole('button', { name: 'Add' })
  fireEvent.click(addBtnElement)

  const titleElement = screen.getByText(/New Note Title/i);
  const bodyElement = screen.getByText(/New Note body/i);

  const editBtnElement = screen.getByRole('button', { name: 'Edit' })
  const delBtnElement = screen.getByRole('button', { name: 'Delete' })

  expect(titleElement).toBeInTheDocument();
  expect(bodyElement).toBeInTheDocument();
  expect(editBtnElement).toBeInTheDocument();
  expect(delBtnElement).toBeInTheDocument();

});

//check clicking add button renders new note
test('check editing & saving a note', () => {
  render(<Board />);
  const addBtnElement = screen.getByRole('button', { name: 'Add' })

  fireEvent.click(addBtnElement)

  //get handle to edit use a let because they will be rerendered
  //later and will have to be attached to again
  let editBtnElement = screen.getByRole('button', { name: 'Edit' })

  fireEvent.click(editBtnElement)

  const saveBtnElement = screen.getByRole('button', { name: 'Save' })
  expect(saveBtnElement).toBeInTheDocument();

  const titleInputElement = screen.getByText(/New Note Title/i)
  const bodyInputElement = screen.getByText(/New Note body/i)
  expect(titleInputElement).toBeInTheDocument();
  expect(bodyInputElement).toBeInTheDocument();


  //change title
  fireEvent.change(titleInputElement, {target: {value: 'React Notes'}})
  expect(titleInputElement.value).toBe('React Notes')

  //change body
  fireEvent.change(bodyInputElement, {target: {value: 'React is a UI framework'}})
  expect(bodyInputElement.value).toBe('React is a UI framework')

  //click save button
  fireEvent.click(saveBtnElement)

   //get handle to edit button
  editBtnElement = screen.getByRole('button', { name: 'Edit' })
  let delBtnElement = screen.getByRole('button', { name: 'Delete' })
  //now check that the edit and delete buttons are displayed
  expect(delBtnElement).toBeInTheDocument();
  expect(editBtnElement).toBeInTheDocument();

});


//check for button
test('check delete functionality', () => {
  render(<Board />);
  const addBtnElement = screen.getByRole('button', { name: 'Add' })
  expect(addBtnElement).toBeInTheDocument();

  //click add button
  fireEvent.click(addBtnElement)

  //verify that a note was addd
  const titleElement = screen.getByText(/New Note Title/i);
  const bodyElement = screen.getByText(/New Note body/i);

  expect(titleElement).toBeInTheDocument();
  expect(bodyElement).toBeInTheDocument();

  const editBtnElement = screen.getByRole('button', { name: 'Edit' })
  const delBtnElement = screen.getByRole('button', { name: 'Delete' })

  expect(editBtnElement).toBeInTheDocument();
  expect(delBtnElement).toBeInTheDocument();

  //click the delete button
  fireEvent.click(delBtnElement)

  expect(editBtnElement).not.toBeInTheDocument();
  expect(delBtnElement).not.toBeInTheDocument();

});