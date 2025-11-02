const Insert=()=>{
    return(
        <>
        <h1>Welcome to Insert page</h1>
        <h1> Insert Data</h1>
          Enter Empno : <input type="text" name="empno" onChange={handleInput} />
          <br/>
            Enter Name : <input type="text" name="name" onChange={handleInput} />
          <br/>
            Enter Designation : <input type="text" name="designation" onChange={handleInput} />
          <br/>
            Enter Salary : <input type="text" name="salary" onChange={handleInput} />
          <br/>
          <button onClick={handleSubmit}>Save!!!</button>
        </>
    )
}
export default Insert;