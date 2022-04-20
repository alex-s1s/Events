import React from "react";
import { storiesOf } from "@storybook/react";
import FontStyle from "@style/styledComponents/FontStyle";
import { HolderHomePa } from "@assets/images";
import { Grid, H1, EmptyHolder } from "@components";
import { Docs, StoriesStyle } from "@docs-components";

storiesOf("Components|EmptyHolder", module).add("EmptyHolder", () => (
  <StoriesStyle>
    <FontStyle />
    <H1>EmptyHolder</H1>
    <p>
      A component that shows an infomation about the empty content in inner
      centralized vertically and horizontally wrapper to simbolize that the area
      has no content.
    </p>
    <Grid container>
      <Grid item xs={12} minHeight="100vh" backgroundColor="whiteGrey">
        <EmptyHolder>
          <HolderHomePa
            role="img"
            focusable={false}
            ariaLabel="Nenhum conteúdo"
            width="100%"
          />
          EmptyHolder
        </EmptyHolder>
      </Grid>
      <Grid item xs={12}>
        <Docs element={EmptyHolder} />
      </Grid>
    </Grid>
  </StoriesStyle>
));
