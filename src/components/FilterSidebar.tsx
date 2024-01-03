"use client";
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';



interface FilterSidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ collapsed, setCollapsed }) => {
  return (


    <div className='flex flex-col'>  

      {/* Main Content */}
      <div className='flex sidebar' style={{ display: 'flex', height: '100vh', minHeight: '400px' }}>

        <Sidebar width='400px' collapsed={collapsed} transitionDuration={1000}>
          <Menu style={{ color: 'black' }}>
            <MenuItem className='ml-16' style={{ color: 'black' }}>
              <div className="flex items-center">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4  bg-gray-100 rounded border-gray-300  " />
                  <label  className="ml-2 text-lg font-medium text-gray-900 ">Default checkbox</label>
              </div>
            </MenuItem>
            <SubMenu className='ml-16' label="IDEAL FOR"  >

            </SubMenu>
            <SubMenu className='ml-16' label="OCCATION" >
              {/* Sub items for OCCATION */}
            </SubMenu>
            <SubMenu className='ml-16' label="WORK" >
              {/* Sub items for WORK */}
            </SubMenu>
            <SubMenu className='ml-16' label="FABRIC" >
              {/* Sub items for FABRIC */}
            </SubMenu>
            <SubMenu className='ml-16' label="SEGMENT" >
              {/* Sub items for SEGMENT */}
            </SubMenu>
            <SubMenu className='ml-16' label="SUITABLE FOR" >
              {/* Sub items for SUITABLE FOR */}
            </SubMenu>
            <SubMenu className='ml-16' label="RAW MATERIALS" >
              {/* Sub items for RAW MATERIALS */}
            </SubMenu>
            <SubMenu className='ml-16' label="PATTERN" >
              {/* Sub items for PATTERN */}
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </div>
    
  );
}

export default FilterSidebar;
