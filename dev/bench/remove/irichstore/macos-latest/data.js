window.BENCHMARK_DATA = {
  "lastUpdate": 1702968370308,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "56df40f304df3cbc85ce84447c148d9cdd54da7a",
          "message": "Remove unnecessary arguments",
          "timestamp": "2023-12-19T15:18:03+09:00",
          "tree_id": "4b66446b048ef2de59401d42b381fefc544182ee",
          "url": "https://github.com/greymistcube/libplanet/commit/56df40f304df3cbc85ce84447c148d9cdd54da7a"
        },
        "date": 1702967890334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9362971.728915663,
            "unit": "ns",
            "range": "± 1434927.9779173955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30168593.5,
            "unit": "ns",
            "range": "± 6963285.998688711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59177078.92553192,
            "unit": "ns",
            "range": "± 8991203.932713874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106183645.23529412,
            "unit": "ns",
            "range": "± 6497585.525271717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230243577.72727272,
            "unit": "ns",
            "range": "± 23013286.424493723"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74108.20689655172,
            "unit": "ns",
            "range": "± 8179.761705657887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354198.3842105263,
            "unit": "ns",
            "range": "± 60207.96028639529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353662.1145833333,
            "unit": "ns",
            "range": "± 59400.84989722831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335400.53225806454,
            "unit": "ns",
            "range": "± 50947.91171029733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4630586.166666667,
            "unit": "ns",
            "range": "± 399472.20876774704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4136560.8440860217,
            "unit": "ns",
            "range": "± 252393.9764660769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22027.40322580645,
            "unit": "ns",
            "range": "± 4791.203790517795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101398.03260869565,
            "unit": "ns",
            "range": "± 18509.082602310267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104274.5425531915,
            "unit": "ns",
            "range": "± 14500.205388174507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107597.76842105263,
            "unit": "ns",
            "range": "± 16388.858256970718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6818.283505154639,
            "unit": "ns",
            "range": "± 1246.7587830283846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17926.957446808512,
            "unit": "ns",
            "range": "± 1928.5633778724593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1506336.6914893617,
            "unit": "ns",
            "range": "± 142341.43280359806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3114032.9101123596,
            "unit": "ns",
            "range": "± 388216.9168433486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2246736.3263157895,
            "unit": "ns",
            "range": "± 230553.0229348851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11330660.81443299,
            "unit": "ns",
            "range": "± 2564095.2380628306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3575476.258426966,
            "unit": "ns",
            "range": "± 471305.3675200817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587281.011111111,
            "unit": "ns",
            "range": "± 315611.01771933015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4443251.863636363,
            "unit": "ns",
            "range": "± 375535.2394284136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4297141.78021978,
            "unit": "ns",
            "range": "± 547709.0566424397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20623167.802083332,
            "unit": "ns",
            "range": "± 3369990.0417961087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5787333.084472656,
            "unit": "ns",
            "range": "± 111175.7090437746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1771992.3140285327,
            "unit": "ns",
            "range": "± 27550.47624935806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1072129.238671875,
            "unit": "ns",
            "range": "± 7004.035565754657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2784730.611672794,
            "unit": "ns",
            "range": "± 49505.46093872359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 939419.462858073,
            "unit": "ns",
            "range": "± 27545.77285778698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783424.644670759,
            "unit": "ns",
            "range": "± 18234.037505391952"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "9184a49017e02fdccf557059daa88da9e19d452c",
          "message": "Changelog",
          "timestamp": "2023-12-19T15:28:48+09:00",
          "tree_id": "77bd1dbc57562835aab336666e502ff4af90e801",
          "url": "https://github.com/greymistcube/libplanet/commit/9184a49017e02fdccf557059daa88da9e19d452c"
        },
        "date": 1702968353925,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7714696.785714285,
            "unit": "ns",
            "range": "± 118987.73735278424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19105274.184210528,
            "unit": "ns",
            "range": "± 654488.5947032647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51342466.77659574,
            "unit": "ns",
            "range": "± 3325144.4382339646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96855461.22916667,
            "unit": "ns",
            "range": "± 3795975.0860168277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192553961.25531915,
            "unit": "ns",
            "range": "± 6594287.799926123"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54478.1976744186,
            "unit": "ns",
            "range": "± 15949.656450712637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254009.51428571428,
            "unit": "ns",
            "range": "± 11545.767731696567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232935.37368421053,
            "unit": "ns",
            "range": "± 21112.743563838056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207915.34,
            "unit": "ns",
            "range": "± 21317.822982223443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3818927.45,
            "unit": "ns",
            "range": "± 83712.7170553366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3422089.6666666665,
            "unit": "ns",
            "range": "± 78740.18239268521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14297.545977011494,
            "unit": "ns",
            "range": "± 1669.7712968871053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65785.10215053764,
            "unit": "ns",
            "range": "± 10233.523988364423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52739.51807228916,
            "unit": "ns",
            "range": "± 3620.8885628289513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66956.42857142857,
            "unit": "ns",
            "range": "± 14579.1495827672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3574.9945054945056,
            "unit": "ns",
            "range": "± 734.7254418961379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12507.39534883721,
            "unit": "ns",
            "range": "± 1229.2024317951266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1203015.8988764044,
            "unit": "ns",
            "range": "± 156234.09177635604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3083559.154639175,
            "unit": "ns",
            "range": "± 686186.4091344114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1838166.0697674418,
            "unit": "ns",
            "range": "± 287049.0824077382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10210158.75,
            "unit": "ns",
            "range": "± 2194064.5842831903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2861817.125,
            "unit": "ns",
            "range": "± 71483.57463465935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2911532.1904761903,
            "unit": "ns",
            "range": "± 94411.13354230698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3498601.5862068967,
            "unit": "ns",
            "range": "± 100384.3893471907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3481656.1408450706,
            "unit": "ns",
            "range": "± 170065.86416363143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15435720.292929294,
            "unit": "ns",
            "range": "± 3334957.5052438574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4312342.97890625,
            "unit": "ns",
            "range": "± 69709.98784854401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1331766.9666573661,
            "unit": "ns",
            "range": "± 8414.08795635598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 865632.6017578125,
            "unit": "ns",
            "range": "± 11461.964802315117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972075.0765625,
            "unit": "ns",
            "range": "± 33796.42966473645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631372.3420061384,
            "unit": "ns",
            "range": "± 6192.195629480481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 601744.5179398148,
            "unit": "ns",
            "range": "± 16673.877643811862"
          }
        ]
      }
    ]
  }
}