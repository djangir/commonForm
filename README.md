# NPM DYNAMIC FULLY CUSTOMISED FORM FOR COMMON USE
___________________
_______________

Use this form for create common form for your website.
________________
____________

# Features :-
_______________________________

 - create Form For common Use.
 - show Custom Html in form
 - customize errors and show Erros or messages.
- customize full form .
- show custom html in form. 
- manage local state data in only one state.
- reduce & optmize your code
 
________________
________________

# Example 

```
import { useState } from 'react';
import InputForm from './project';

function App() {
  const [dataObject, setDataObject] = useState({});

  const customFieldsData = () => {
    return (
      <>
        <input
          onChange={(e) => {
            dataObject.custom = e.target.value;
            setDataObject({ ...dataObject });
          }}
          type="radio"
          name="fav_language"
          value="HTML"
        />
        <label for="html">HTML</label>
        <br />
        <input
          onChange={(e) => {
            dataObject.custom = e.target.value;
            setDataObject({ ...dataObject });
          }}
          type="radio"
          name="fav_language"
          value="CSS"
        />
        <label for="css">CSS</label>
        <br />
        <input
          onChange={(e) => {
            dataObject.custom = e.target.value;
            setDataObject({ ...dataObject });
          }}
          type="radio"
          name="fav_language"
          value="JavaScript"
        />
        <label for="javascript">JavaScript</label>
      </>
    );
  };

  const fieldsData = [
    {
      type: 'text',
      label: 'text',
      onChange: (e) => {
        dataObject.title = e.target.value;
        setDataObject({ ...dataObject });
      },
      value: dataObject.title,
      inputtype: 'input',
      error: 'Error msg',
      placeholder: 'input',
      required: true,
      hideDefaultErr: true,
    },
    {
      label: 'textarea',
      error: 'Error msg',
      onChange: (e) => {
        dataObject.discription = e.target.value;
        setDataObject({ ...dataObject });
      },
      value: dataObject.discription,
      inputtype: 'textarea',
      rows: 5,
      placeholder: 'textarea',
    },
    {
      label: 'dropdown',
      onChange: (e) => {
        dataObject.select = e.target.value;
        setDataObject({ ...dataObject });
      },
      value: dataObject.select,
      inputtype: 'dropdown',
      placeholder: 'dropDown',
      required: true,
      data: [
        {
          id: 1,
          title: 'test',
        },
        {
          id: 2,
          title: 'test2',
        },
      ],
      showkey: 'title',
      setkey: 'id',
    },

    { customHtml: customFieldsData },

    {
      value: 'button',
      title: 'button',

      onClick: () => {
        console.log(dataObject);
      },
      inputtype: 'button',
    },
  ];

  return (
    <div>
      <InputForm fieldsData={fieldsData} />
    </div>
  );
}

export default App;
```




________________
________________


## Props 
__________


|Title|Default|Require|Accept|Options|
|-|-|-|-|-|
|fieldsData|null|Reuqired|Object|

_________________
___________________

## Json Props 
__________

### in json you can provide any prop and use it.

|Title|Default|Require|Accept|Options|
|-|-|-|-|-|
|customHtml||no|function|
|inputtype| input |No|string| button, textarea, dropdown |
|label|  |No|string||
|error|  |No|string||
