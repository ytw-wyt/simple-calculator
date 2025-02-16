import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './Calculator';
import axios from 'axios';

// Properly mock axios module
jest.mock('axios');

it('Appends the number when pressed', async () => {
   render(<Calculator/>);

   // press a 1 on the calculator
   var button1 = screen.getByText('1')
   fireEvent.click(button1)
   await button1

   // get the expression DOM node and check that it is 1
   const element = screen.getByTestId('total')
   expect(element).toHaveTextContent('1');

   // press a 2 on the calculator
   var button2 = screen.getByText('2')
   fireEvent.click(button2)
   await button2

   // get the expression DOM node and check that it is 12
   expect(element).toHaveTextContent('12');
});

it('Clears the display when C is pressed', async () => {
   render(<Calculator/>);

   // Press a number
   var button1 = screen.getByText('1')
   fireEvent.click(button1)
   await button1

   // Check that 1 is displayed
   const element = screen.getByTestId('total')
   expect(element).toHaveTextContent('1');

   // Press the C button
   var clearButton = screen.getByText('C')
   fireEvent.click(clearButton)
   await clearButton

   // Check that display is cleared to 0
   expect(element).toHaveTextContent('0');
 });

it('Calculates the result when = is pressed', async () => {
   // Mock the POST request for the calculation
   axios.post.mockResolvedValueOnce({ data: { result: 3 } });

   render(<Calculator/>);

   // Press 1 + 2 =
   var button1 = screen.getByText('1')
   fireEvent.click(button1)
   await button1

   var button2 = screen.getByText('+')
   fireEvent.click(button2)
   await button2

   var button3 = screen.getByText('2')
   fireEvent.click(button3)
   await button3

   var button4 = screen.getByText('=')
   fireEvent.click(button4)
   await button4
   
   // Check that result is 3
   await waitFor(() => 
     expect(screen.getByTestId('total')).toHaveTextContent('3')
   );
});
