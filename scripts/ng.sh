#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")
case `uname` in 
     *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac
if [ -x "$basedir/node" ]; then
  "$basedir/node" --max_old_space_size=8192 "./node_modules/@angular/cli/bin/ng" "$@"
  ret=$?
else
  node --max_old_space_size=8192 "./node_modules/@angular/cli/bin/ng" "$@"
  ret=$?
fi
exit $ret
