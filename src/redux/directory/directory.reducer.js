const INITIAL_STATE = {
    sections: [
        {
        title: 'cycling',
        imageUrl: 'images/cycling.jpg',
        id: 1,
        linkUrl: 'shop/cycling'
      },
      {
        title: 'supplements',
        imageUrl: 'images/supplements.jpg',
        id: 2,
        linkUrl: 'shop/supplements'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'weights',
        imageUrl: 'images/weights.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/weights'
      },
      {
        title: 'clothing',
        imageUrl: 'images/clothes.JPG',
        size: 'large',
        id: 5,
        linkUrl: 'shop/clothing'
      }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;