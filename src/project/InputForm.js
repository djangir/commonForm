import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './inputForm.css';

const InputForm = (props) => {
  const { fieldsData } = props;
  const [errors, setErrors] = useState(true);
  const [requireFields, setRequireFields] = useState([]);

  const setFieldsErr = () => {
    if (requireFields.length > 0) {
      requireFields.map((item, index) => {
        if (!fieldsData[item].value?.trim()?.length) {
          fieldsData[item].error = 'This field is required.';
          setErrors(!errors);
        } else {
          fieldsData[item].error = '';
          setErrors(!errors);
        }
      });
    }
  };

  const optionMap = useCallback((data, setkey = 'id', showkey = 'title') => {
    if (Array.isArray(data)) {
      return data.map((item, index) => {
        return (
          <option className="input-div" key={index} value={item[showkey]}>
            {item[setkey]}
          </option>
        );
      });
    }
  }, []);

  const renderDropDown = useCallback((item, key, data, showkey, setkey) => {
    return (
      <div className="input-div" key={key}>
        {item.label && renderLabel(item.label)}
        <select {...item}>
          <option selected disabled value="">
            {item.placeholder}
          </option>
          {data && optionMap(data, showkey, setkey)}
        </select>
        {item.error && renderError(item.error)}
      </div>
    );
  }, []);

  const handleSubmitBtnClick = (func) => {
    setFieldsErr();
    if (func) {
      func();
    }
  };

  const renderLabel = (title, required) => {
    return (
      <div className="title">
        {required && <span className="requires-span">*</span>} {title}
      </div>
    );
  };

  const renderError = (title) => {
    return <div className="error">{title}</div>;
  };

  const fieldsDataMap = useMemo(() => {
    if (Array.isArray(fieldsData)) {
      return fieldsData.map((item, index) => {
        const { customHtml, hideDefaultErr, inputtype, title, label, error, required, data, showkey, setkey } = item;

        if (required && !hideDefaultErr) {
          requireFields.push(index);
          let checkUniqunique = new Set(requireFields);
          setRequireFields([...checkUniqunique]);
        }

        if (customHtml) {
          return customHtml();
        } else if (inputtype == 'textarea') {
          return (
            <div className="input-div" key={index}>
              {label && renderLabel(label, required)}
              <textarea {...item} />
              {error && renderError(error)}
            </div>
          );
        } else if (inputtype == 'dropdown') {
          return renderDropDown(item, index, data, showkey, setkey);
        } else if (inputtype == 'button') {
          let onClickAction;
          if (item.onClick) {
            onClickAction = item.onClick;
            delete item.onClick;
          }

          return (
            <div className="input-div" key={index}>
              <button onClick={() => handleSubmitBtnClick(onClickAction)} {...item}>
                {title}
              </button>
            </div>
          );
        } else {
          return (
            <div className="input-div" key={index}>
              {label && renderLabel(label, required)}
              <input {...item} />
              {error && renderError(error)}
            </div>
          );
        }
      });
    } else {
      return 'please Provide array Value';
    }
  }, [errors, fieldsData]);

  return <div className="input-form">{fieldsDataMap} </div>;
};

export default InputForm;
