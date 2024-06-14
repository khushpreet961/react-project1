function Card() {
    let title = "flower"
    let paragraph= "nice flowers"
    let items=[{title:"hello",paragraph:"i am khush"},{title:"hello2",paragraph:"i am khush2"}]
    return(
        <>
        {items.map((item,index)=>{
            <div className="card" style={{ width: "18rem" }}>
            <img src="https://th.bing.com/th/id/OIP.TI-fN1wSDa-KLZSWMtKIggAAAA?rs=1&pid=ImgDetMain" className="card-img-top" alt="flower-img" />
            <div className="card-body">
              <h5 className="card-title">Card {title}</h5>
              <p className="card-text">
                {paragraph}
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        })
    }
     </>
    )
}
export default Card