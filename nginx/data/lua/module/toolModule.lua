local _M = {}

local path = "/var/log/openresty/lua.log"

local function swrite(content)
    local file = io.open(path,'a+');
    file:write(content.."\n")
    file:close()
end


_M.swrite = swrite

return _M
