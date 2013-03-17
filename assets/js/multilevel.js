(function($) {
    $.multilevel = function(options) {
        options = options || {};
        var levelMap = options.map, levelsData = options.data,
        getAllKeys = function (obj) {
            var keys = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) keys.push(i);
            }
            return keys;
        };
        var changeLevel = function (levelId, value) {
            var nextLevelId = levelMap[levelId];
            var data = levelsData[levelId][value],
            con = $(nextLevelId), sel = con.siblings('select');
            if (!sel.length) {
                sel = $('<select></select>').insertAfter(con);
            }
            sel.empty();
            for (var i=0, len=data.length; i<len; i++) {
                sel.append('<option>'.concat(data[i], '</option>'));
            }
            con.val(sel.val());
            var nextnextLevelId = levelMap[nextLevelId];
            if (nextnextLevelId) {
                sel.change(
                    function (e) {
                        con.val($(this).val());
                        // change next level
                        changeLevel(nextLevelId, $(this).val());
                    });
                changeLevel(nextLevelId, $(sel).val());
            } else {
                sel.change(function () {
                               con.val($(this).val());
                           });
            }
        };

        var levelsId = getAllKeys(levelMap);
        for (var i=0, len=levelsId.length; i<len;  i++) {
            var levelId = levelsId[i];
            (i!=0) && $(levelId).hide();
            (i==len-1) && $(levelMap[levelId]).hide();
            if (i==0) {
                $(levelId).change(function () {changeLevel(levelsId[0], $(this).val());});
                changeLevel(levelId, $(levelId).val());
            };
        }
    };
})(jQuery);
