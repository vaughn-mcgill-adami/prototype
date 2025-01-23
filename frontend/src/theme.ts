import { createTheme, Button } from '@mantine/core';

export const theme = createTheme({
    components: {
      Button: Button.extend({
        defaultProps: {
          color: 'orange-1',
          variant: 'outline',
        },
      }),
    }
  });
