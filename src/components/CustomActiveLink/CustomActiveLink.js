import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomActiveLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "#1E90FF" : "black", marginRight:'60px' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        
      </div>
    );
  }

export default CustomActiveLink;
