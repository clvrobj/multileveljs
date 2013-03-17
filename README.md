## Multileveljs
A tool to solve multiple levels inputs form problem.
See it in action: <http://clvrobj.github.com/multileveljs/>

### How to use?
Only the first level input control need to set as select control, other levels set as text input.
```html
Country:
<select id="id-country" name="country">
    <option value="China">China</option>
    <option value="US">United States</option>
    <option value="Japan">Japan</option>
</select>
City:
<input id="id-city" type="text" class="charfield required" name="city" maxlength="2000" />
Districts:
<input id="id-district" type="text" class="charfield required" name="district" maxlength="2000" />
```

Pass controls map and data in option, that's all.
```html
<script type="text/javascript">
    $(function () {
          $.multilevel({map:{'#id-country':'#id-city', '#id-city':'#id-district'},
                        data:{'#id-country':{
                                  'China':['Beijing', 'Shanghai'],
                                  'US':['Los Angeles'],
                                  'Japan':['Tokyo']},
                              '#id-city':{
                                  'Beijing':['Chaoyang', 'Dongcheng', 'Xicheng'],
                                  'Shanghai':['Changning', 'Putuo'],
                                  'Los Angeles':['Hollywood', 'Harbor Area'],
                                  'Tokyo':['Ueno']}
                             }
                       });
      });
</script>
```