<?php
$data = array(
0 => array(
'id' => 1,
'name' => 'Foo', 'image' => array(
'url' => '/pub/foo.jpg')
),
1 => array(
'id' => 2,
'name' => 'Bar', 'image' => array(
'url' => '/pub/bar.jpg' )
),
2 => array(
'id' => 3,
'name' => 'Foo Bar', 'image' => array(
'url' => '/pub/foobar.jpg' )
) );

function getArrayValuesRecursively(array $data) {
    $image = array_column($data, 'image');
    $image = call_user_func_array('array_merge', $image);
    $url = array_column($image, 'url');

    foreach ($data as $array) {
     return $url;
    }
}
echo var_export(getArrayValuesRecursively($data), true);

?>