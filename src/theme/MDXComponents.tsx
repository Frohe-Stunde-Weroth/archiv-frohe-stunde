  /**
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  import MDXComponents from '@theme-original/MDXComponents'
  import ImageGridGallery from '@site/src/components/ImageGridGallery';
  import ImageWithText from '@site/src/components/ImageWithText';
  import AudioList from '@site/src/components/AudioList';

  export default {
    // Reusing the default mapping
    ...MDXComponents,
    // Adding the ImageOnClick tag following the doc's process ;)
    ImageGridGallery,
    ImageWithText,
    AudioList,
  };