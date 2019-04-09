import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { ThemeProvider, SheetsRegistry } from 'react-jss'
import renderer from 'react-test-renderer'

import Avatar from './Avatar'

it('matches css snapshot', () => {
  const sheets = new SheetsRegistry()

  renderer
    .create(
      <JssProvider registry={sheets}>
        <ThemeProvider
          theme={{
            typography: {
              fontFamily: 'Times New Roman, Arial',
              pxToRem: x => x * 2
            },
            palette: {
              background: { default: '#000000' },
              grey: []
            }
          }}
        >
          <Avatar src='/..' />
        </ThemeProvider>
      </JssProvider>
    )
    .toJSON()

  expect(sheets.toString()).toMatchSnapshot()
})
