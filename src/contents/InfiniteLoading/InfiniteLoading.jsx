import React from "react";

const InfinteLoading = () => {
  const [listItems, setListItems] = React.useState(Array.from(Array(10).keys(), n => n + 1));
  const [isFetching, setIsFetching] = React.useState(false)

  React.useEffect(() => {
    if (isFetching) {
      fetchMoreData()
    }
  }, [isFetching])

  function handleScroll(e) {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      setIsFetching(true)
    }
  }

  function fetchMoreData() {
    setTimeout(() => {
      setListItems((prevState) => [...prevState, ...Array.from(Array(10).keys(), n => n + prevState.length + 1)])
      setIsFetching(false)
    }, 1000)
  }

  return (
    <div className='container'>
      <div className='box' onScroll={handleScroll}>
        {
          listItems.map((item) => {
            return (
              <div key={item} className='list'>List {item}</div>
            )
          })
        }
        {isFetching ? "Loading..." : (<></>)}
      </div>
    </div>
  )
};

export default InfinteLoading;