function formValidation(nameForm) 
{
    // check if name is empty
    if (nameForm.name.value == "")
    {
        // trigger alert
        alert("A name is required.");
        // return cursor to name field
        nameForm.name.focus();
        return false;
    }
    return true;
}

