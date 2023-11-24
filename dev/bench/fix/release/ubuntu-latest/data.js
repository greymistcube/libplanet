window.BENCHMARK_DATA = {
  "lastUpdate": 1700481691300,
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
          "id": "a773b1e3352c423c8b1d3e5a8458b2eb80511f05",
          "message": "Change fetch depth",
          "timestamp": "2023-11-20T20:35:00+09:00",
          "tree_id": "30cc4f94e623cf3b676e1211b9e1635f7d073bc6",
          "url": "https://github.com/greymistcube/libplanet/commit/a773b1e3352c423c8b1d3e5a8458b2eb80511f05"
        },
        "date": 1700480762069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5788968,
            "unit": "ns",
            "range": "± 24845.445841782013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15089604.4,
            "unit": "ns",
            "range": "± 55251.03890658657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37598821.461538464,
            "unit": "ns",
            "range": "± 168761.83114654777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77314626.88461539,
            "unit": "ns",
            "range": "± 446372.8064967179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155267825.85714287,
            "unit": "ns",
            "range": "± 906048.229566842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971768.1685393258,
            "unit": "ns",
            "range": "± 58309.33073804739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1884392.2719298245,
            "unit": "ns",
            "range": "± 72267.6596294778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1384474.6170212766,
            "unit": "ns",
            "range": "± 104266.24202957556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5821435,
            "unit": "ns",
            "range": "± 381069.07867411233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2391179,
            "unit": "ns",
            "range": "± 78814.01650178005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2605919.423076923,
            "unit": "ns",
            "range": "± 107360.70064832778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3184889.1578947366,
            "unit": "ns",
            "range": "± 69347.87320319937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2983154.527777778,
            "unit": "ns",
            "range": "± 93767.52409336192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6531826.368421053,
            "unit": "ns",
            "range": "± 143628.33637096148"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41285.645833333336,
            "unit": "ns",
            "range": "± 6300.024639850172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3773070.30859375,
            "unit": "ns",
            "range": "± 9615.199865086932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1171429.2367788462,
            "unit": "ns",
            "range": "± 5094.09536889308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734567.6018880209,
            "unit": "ns",
            "range": "± 3153.7445537736144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917490.212076823,
            "unit": "ns",
            "range": "± 6561.423218670478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611998.1641322544,
            "unit": "ns",
            "range": "± 1351.8494293978003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569817.65859375,
            "unit": "ns",
            "range": "± 1229.4994241345355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203584.81632653062,
            "unit": "ns",
            "range": "± 8115.487972270135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195021.61016949153,
            "unit": "ns",
            "range": "± 8508.212517442415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168150.27142857143,
            "unit": "ns",
            "range": "± 5353.8516816000265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3078583.1923076925,
            "unit": "ns",
            "range": "± 28191.77895056351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2837214.785714286,
            "unit": "ns",
            "range": "± 18540.09659828196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12435.59375,
            "unit": "ns",
            "range": "± 1431.451067811776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68332.97368421052,
            "unit": "ns",
            "range": "± 5364.448988860584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60203.32258064516,
            "unit": "ns",
            "range": "± 6471.652672065625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62306.4375,
            "unit": "ns",
            "range": "± 9610.591141041385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3221.736263736264,
            "unit": "ns",
            "range": "± 533.3746407996049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13617.828282828283,
            "unit": "ns",
            "range": "± 3170.0397507338507"
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
          "id": "4f79b61f37a3c78189e4e9b3ce7197dc0836a77a",
          "message": "Change fetch depth",
          "timestamp": "2023-11-20T20:36:46+09:00",
          "tree_id": "4ab1130a8fe8964c78fd960543263fe9019b43bf",
          "url": "https://github.com/greymistcube/libplanet/commit/4f79b61f37a3c78189e4e9b3ce7197dc0836a77a"
        },
        "date": 1700480866306,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5848496.033333333,
            "unit": "ns",
            "range": "± 69598.08767987262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14922067.866666667,
            "unit": "ns",
            "range": "± 82275.53632231035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38457669.13333333,
            "unit": "ns",
            "range": "± 210473.72142854545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76566714.35714285,
            "unit": "ns",
            "range": "± 387739.48432496964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155813581,
            "unit": "ns",
            "range": "± 721759.8651997538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963470.1318681319,
            "unit": "ns",
            "range": "± 85831.93062921266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1864075.75,
            "unit": "ns",
            "range": "± 73164.7241066058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1457472.3608247424,
            "unit": "ns",
            "range": "± 147266.82238571998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5725968.858024691,
            "unit": "ns",
            "range": "± 299672.8570546684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2413412.4285714286,
            "unit": "ns",
            "range": "± 57307.893694997576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2641602.322222222,
            "unit": "ns",
            "range": "± 91596.37585508423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3274444.4285714286,
            "unit": "ns",
            "range": "± 47466.5348469753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3069862.763157895,
            "unit": "ns",
            "range": "± 105197.66031456502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6547848.3125,
            "unit": "ns",
            "range": "± 120827.97599492084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39578.46315789474,
            "unit": "ns",
            "range": "± 5061.065569432618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3609728.0203125,
            "unit": "ns",
            "range": "± 57895.52694403581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1152809.606670673,
            "unit": "ns",
            "range": "± 5500.484421829754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737787.4364483173,
            "unit": "ns",
            "range": "± 2903.3664932348474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920966.4603365385,
            "unit": "ns",
            "range": "± 4817.868346114951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616596.699625651,
            "unit": "ns",
            "range": "± 1100.5369205801842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587880.8963496768,
            "unit": "ns",
            "range": "± 17208.16862249961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199833.57575757575,
            "unit": "ns",
            "range": "± 9378.292595236342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196246.9836065574,
            "unit": "ns",
            "range": "± 8570.034823911752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168088.67857142858,
            "unit": "ns",
            "range": "± 4757.335677110561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3174735.3,
            "unit": "ns",
            "range": "± 51093.17813871325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2877508.714285714,
            "unit": "ns",
            "range": "± 42925.3956989576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16197.133333333333,
            "unit": "ns",
            "range": "± 2372.5455878216826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63903.73469387755,
            "unit": "ns",
            "range": "± 5690.198930356595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63724.96341463415,
            "unit": "ns",
            "range": "± 5561.517763897835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60144.947916666664,
            "unit": "ns",
            "range": "± 10477.857805737716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3367.52688172043,
            "unit": "ns",
            "range": "± 704.6395407736444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15866.612903225807,
            "unit": "ns",
            "range": "± 1277.958766704511"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "bd23c70d5019338a725a2d44638c628902778cee",
          "message": "Use Node 20, Update Yarn and some dependencies. (#3468)\n\n* use ES2022\n\n* add isDigest\n\n* WebCrypto Export\n\n* yarn upgrade (4.0.1)\n\n* Fix typo\n\n* Use Typescript ^4.5.0 (due to nanobundle dependancy)\n\n* Update Nanobundle 1.6.0\n\n* Use NodeNext (implies EsNext)\n\n* Add\n\n* use 20 in CI\n\n* use lts/*\n\n* WebCrypto Shim\n\n* Webcrypto Shim 2.0 Electric Boogaloo\n\n* Update .github/workflows/yarn.yaml\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>\n\n* Add rootdir\n\n* isDigest Removal\n\n* Add engines\n\n* Rome ignore.\n\n* add\n\n* Remove Digest Completely\n\n* Add Bencodex\n\n* Test\n\n* Remove bencodex\n\n---------\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-11-20T20:50:25+09:00",
          "tree_id": "69a7248c31c7f108ea18b3dde4f848df24bca099",
          "url": "https://github.com/greymistcube/libplanet/commit/bd23c70d5019338a725a2d44638c628902778cee"
        },
        "date": 1700481682478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5764030.733333333,
            "unit": "ns",
            "range": "± 15177.720186729846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14399545.233333332,
            "unit": "ns",
            "range": "± 120985.15152663905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37688885.583333336,
            "unit": "ns",
            "range": "± 175279.42571607218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76210869.75,
            "unit": "ns",
            "range": "± 233049.88932927293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149908273.13333333,
            "unit": "ns",
            "range": "± 1420315.4498605917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1041161.5,
            "unit": "ns",
            "range": "± 65005.24846949972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2026061.6382978724,
            "unit": "ns",
            "range": "± 77024.9586456645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590932.0229885057,
            "unit": "ns",
            "range": "± 142120.19362407178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6110330.989795919,
            "unit": "ns",
            "range": "± 361692.22470961645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2344542.964285714,
            "unit": "ns",
            "range": "± 48473.741994244716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2502566.1428571427,
            "unit": "ns",
            "range": "± 24338.469065238274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3168262.464285714,
            "unit": "ns",
            "range": "± 90696.55492558164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3069443.04,
            "unit": "ns",
            "range": "± 79249.26027177372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6737433.875,
            "unit": "ns",
            "range": "± 261647.15259788284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41248.90206185567,
            "unit": "ns",
            "range": "± 5344.458891887844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3662373.3621651786,
            "unit": "ns",
            "range": "± 17997.519230234244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1140579.7823016827,
            "unit": "ns",
            "range": "± 2381.246302903292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737539.2333984375,
            "unit": "ns",
            "range": "± 1168.3327714217835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931437.8482572115,
            "unit": "ns",
            "range": "± 6057.785276346244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618456.2985026041,
            "unit": "ns",
            "range": "± 1286.8816066830102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574748.0474609375,
            "unit": "ns",
            "range": "± 3620.748514805459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199691.85,
            "unit": "ns",
            "range": "± 6452.027030122851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189024,
            "unit": "ns",
            "range": "± 7537.359749938966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175646.08333333334,
            "unit": "ns",
            "range": "± 2036.2350042232952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3112434.966666667,
            "unit": "ns",
            "range": "± 45019.78102038935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2888638.8,
            "unit": "ns",
            "range": "± 45833.58796964764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15174.159574468085,
            "unit": "ns",
            "range": "± 2323.242058510956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60749.96666666667,
            "unit": "ns",
            "range": "± 6445.759760223527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51558.969696969696,
            "unit": "ns",
            "range": "± 2346.264421911805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73006.64141414141,
            "unit": "ns",
            "range": "± 19216.595658817718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3715.629213483146,
            "unit": "ns",
            "range": "± 689.7938819614304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15875.483870967742,
            "unit": "ns",
            "range": "± 3240.9597968238254"
          }
        ]
      }
    ]
  }
}