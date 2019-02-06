import React, { Component } from 'react';
class SearchBox extends Component {
    render() {
        return (
            <div className="search-box">
                <form className="input">
                    <input className="sb-search-input input__field--madoka" placeholder="Search..." type="search" id="input-31" />
                    <label className="input__label" for="input-31">
                        <svg className="graphic" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                            <path d="m0,0l404,0l0,77l-404,0l0,-77z" />
                        </svg>
                    </label>
                </form>
            </div>
        );
    }
}

export default SearchBox;