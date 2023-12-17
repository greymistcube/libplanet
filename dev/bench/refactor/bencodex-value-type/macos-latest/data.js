window.BENCHMARK_DATA = {
  "lastUpdate": 1702797950778,
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
          "id": "12c4fdea1532e2402db242e451b1655bdbe69092",
          "message": "Updated tests",
          "timestamp": "2023-12-13T09:33:00+09:00",
          "tree_id": "85070767558264a9019ca1c00801a3da551959e4",
          "url": "https://github.com/greymistcube/libplanet/commit/12c4fdea1532e2402db242e451b1655bdbe69092"
        },
        "date": 1702517483614,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8451990.961538462,
            "unit": "ns",
            "range": "± 123775.64945807891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22875180.633333333,
            "unit": "ns",
            "range": "± 333791.6563435227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54393635.45454545,
            "unit": "ns",
            "range": "± 1307322.3506049349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107725400.17391305,
            "unit": "ns",
            "range": "± 6055692.392089242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210540313.54,
            "unit": "ns",
            "range": "± 14117775.814373804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44252.85555555556,
            "unit": "ns",
            "range": "± 6867.6821226181055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247375.05913978495,
            "unit": "ns",
            "range": "± 17564.177823591606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247294.90721649484,
            "unit": "ns",
            "range": "± 22432.514441506217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210975.2474226804,
            "unit": "ns",
            "range": "± 22452.864065188005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4382201.115384615,
            "unit": "ns",
            "range": "± 109142.07035688005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3505924.409090909,
            "unit": "ns",
            "range": "± 83930.62659162488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13249.054945054944,
            "unit": "ns",
            "range": "± 1290.416215047923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56980.36842105263,
            "unit": "ns",
            "range": "± 4483.336208038754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52225.990196078434,
            "unit": "ns",
            "range": "± 2062.928969911946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61580.54081632653,
            "unit": "ns",
            "range": "± 11485.786501144066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3379.598901098901,
            "unit": "ns",
            "range": "± 421.82479393292755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12448.901098901099,
            "unit": "ns",
            "range": "± 1294.7810029751925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1087150.5638297873,
            "unit": "ns",
            "range": "± 104966.61646609349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2183516.1886792453,
            "unit": "ns",
            "range": "± 90465.04529461103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1453628.6744186047,
            "unit": "ns",
            "range": "± 76769.22706097677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7762622.073684211,
            "unit": "ns",
            "range": "± 986145.6334404167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3362532.794117647,
            "unit": "ns",
            "range": "± 108398.28292578882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3255373.505154639,
            "unit": "ns",
            "range": "± 228899.63284092638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3967585.04,
            "unit": "ns",
            "range": "± 105484.06171885242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3997419.794117647,
            "unit": "ns",
            "range": "± 127372.45148199073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15173135.8125,
            "unit": "ns",
            "range": "± 2496905.4636475323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4983338.413322369,
            "unit": "ns",
            "range": "± 577179.7530441101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1559646.2141276042,
            "unit": "ns",
            "range": "± 92535.66559834486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179989.3640008224,
            "unit": "ns",
            "range": "± 127874.75422016594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518812.607252038,
            "unit": "ns",
            "range": "± 190684.6008641935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643444.1903520063,
            "unit": "ns",
            "range": "± 35216.30916791017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570282.2083984375,
            "unit": "ns",
            "range": "± 9121.262773766653"
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
          "id": "f5a81643918efef744a1a7f883191d66384c3830",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:23:23+09:00",
          "tree_id": "ca6b1852c79fbb52005cefb7f809aa6505585af3",
          "url": "https://github.com/greymistcube/libplanet/commit/f5a81643918efef744a1a7f883191d66384c3830"
        },
        "date": 1702518465369,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13485647.563829787,
            "unit": "ns",
            "range": "± 1767561.2858474662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27040472.32828283,
            "unit": "ns",
            "range": "± 4619943.562838419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68971273.6,
            "unit": "ns",
            "range": "± 10826199.90884062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 161073361.75581396,
            "unit": "ns",
            "range": "± 24539305.26682053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 322420978.9583333,
            "unit": "ns",
            "range": "± 38854346.02760576"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78181.59375,
            "unit": "ns",
            "range": "± 19521.18553430612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 395334.01515151514,
            "unit": "ns",
            "range": "± 91144.59297130785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384858.8888888889,
            "unit": "ns",
            "range": "± 103734.04007559859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 376102.4587628866,
            "unit": "ns",
            "range": "± 78139.52083358618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5318491.893617021,
            "unit": "ns",
            "range": "± 916359.1806385316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4307559.12195122,
            "unit": "ns",
            "range": "± 239279.83230763543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18412.97894736842,
            "unit": "ns",
            "range": "± 2635.7498145041104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98110.37912087912,
            "unit": "ns",
            "range": "± 16861.537395857253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95220.8085106383,
            "unit": "ns",
            "range": "± 19862.019113609505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98395.86458333333,
            "unit": "ns",
            "range": "± 18231.660314507142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7880.4,
            "unit": "ns",
            "range": "± 1384.628525204139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18964.02688172043,
            "unit": "ns",
            "range": "± 3427.0002397565213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1631055.611111111,
            "unit": "ns",
            "range": "± 475845.8219008201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3115175.131868132,
            "unit": "ns",
            "range": "± 648641.4743848563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2606926.1021505375,
            "unit": "ns",
            "range": "± 732918.5118922653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11739935.608247424,
            "unit": "ns",
            "range": "± 2887310.628113508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4922595.391304348,
            "unit": "ns",
            "range": "± 1202750.5993639266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5010658.193877551,
            "unit": "ns",
            "range": "± 963247.2259880767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5714289.806122449,
            "unit": "ns",
            "range": "± 1258510.0829003411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5433967.414893617,
            "unit": "ns",
            "range": "± 1122687.7309678264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21784552.224489797,
            "unit": "ns",
            "range": "± 4602212.841456072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4900484.559036727,
            "unit": "ns",
            "range": "± 342005.1827702464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588980.22265625,
            "unit": "ns",
            "range": "± 41174.47168153772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1029426.7442708333,
            "unit": "ns",
            "range": "± 16342.581805865193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2374907.48609375,
            "unit": "ns",
            "range": "± 61220.46181887623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 732950.1138556985,
            "unit": "ns",
            "range": "± 21606.140223364924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 656985.0472237723,
            "unit": "ns",
            "range": "± 11081.43138501181"
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
          "id": "036ce412e50c6df0be53f97821ade6a96bad4d2a",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:56:39+09:00",
          "tree_id": "ca6b1852c79fbb52005cefb7f809aa6505585af3",
          "url": "https://github.com/greymistcube/libplanet/commit/036ce412e50c6df0be53f97821ade6a96bad4d2a"
        },
        "date": 1702520432197,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8807395.214285715,
            "unit": "ns",
            "range": "± 773577.4300809236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24010126.01111111,
            "unit": "ns",
            "range": "± 4026455.999829833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61416551.63978495,
            "unit": "ns",
            "range": "± 7362728.585962499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114228227.92222223,
            "unit": "ns",
            "range": "± 8853600.219568083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227281928.72340426,
            "unit": "ns",
            "range": "± 28957751.682349633"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53350.51136363636,
            "unit": "ns",
            "range": "± 10167.552013827733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269470.5326086957,
            "unit": "ns",
            "range": "± 28141.139914762192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247786.56043956045,
            "unit": "ns",
            "range": "± 21093.26120257831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240327.29166666666,
            "unit": "ns",
            "range": "± 18803.901037546028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4356781.714285715,
            "unit": "ns",
            "range": "± 259881.10202780063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3896321.214285714,
            "unit": "ns",
            "range": "± 63891.24784702948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17008.978723404256,
            "unit": "ns",
            "range": "± 2269.395495175077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83044.65217391304,
            "unit": "ns",
            "range": "± 13322.438011902485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72989.56315789474,
            "unit": "ns",
            "range": "± 11297.262757167302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101268.62244897959,
            "unit": "ns",
            "range": "± 22590.166488762457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8537.229166666666,
            "unit": "ns",
            "range": "± 1715.939843622096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22202.083333333332,
            "unit": "ns",
            "range": "± 5235.379951358614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1204496.1739130435,
            "unit": "ns",
            "range": "± 171247.85962949644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3090375.8333333335,
            "unit": "ns",
            "range": "± 399571.9635580889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1980127.8023255814,
            "unit": "ns",
            "range": "± 185715.82653126222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8138016.833333333,
            "unit": "ns",
            "range": "± 919377.9444136983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3513931.679775281,
            "unit": "ns",
            "range": "± 273015.8362173654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3905480.0520833335,
            "unit": "ns",
            "range": "± 339893.19269589335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4024615.0268817204,
            "unit": "ns",
            "range": "± 348331.4339780244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3847490.925531915,
            "unit": "ns",
            "range": "± 325519.81053087005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16782181.520408165,
            "unit": "ns",
            "range": "± 2850114.3180670324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5284496.695833334,
            "unit": "ns",
            "range": "± 379756.5512556334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1602480.5959028765,
            "unit": "ns",
            "range": "± 91733.57858420805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1017789.1455955934,
            "unit": "ns",
            "range": "± 71532.74810520394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926962.62890625,
            "unit": "ns",
            "range": "± 29793.679723199588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 666399.411342826,
            "unit": "ns",
            "range": "± 47076.99164276157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575125.0520368303,
            "unit": "ns",
            "range": "± 8585.769386344025"
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
          "id": "9dc6ae2bd558d913b25a18a94aa052a747d8d7db",
          "message": "Changelog",
          "timestamp": "2023-12-17T16:03:29+09:00",
          "tree_id": "88f79895e70175a13d674a8d17214fe3f008f307",
          "url": "https://github.com/greymistcube/libplanet/commit/9dc6ae2bd558d913b25a18a94aa052a747d8d7db"
        },
        "date": 1702797819994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8475135.326666666,
            "unit": "ns",
            "range": "± 426700.22417333885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21334687.274509802,
            "unit": "ns",
            "range": "± 799268.4455546353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52049922.461538464,
            "unit": "ns",
            "range": "± 2412408.904995819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107289957.46153846,
            "unit": "ns",
            "range": "± 2772793.924768362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215760622.1470588,
            "unit": "ns",
            "range": "± 4426094.042975603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73077.96739130435,
            "unit": "ns",
            "range": "± 9256.278822306922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391889.6789473684,
            "unit": "ns",
            "range": "± 63086.01482693477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 403050.01,
            "unit": "ns",
            "range": "± 90798.18934012034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 365518.62765957444,
            "unit": "ns",
            "range": "± 68017.49730103594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4565112.242424242,
            "unit": "ns",
            "range": "± 441995.7055169315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4279880.350515464,
            "unit": "ns",
            "range": "± 377547.00108388934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27426.36046511628,
            "unit": "ns",
            "range": "± 4022.0527650699514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123659.25862068965,
            "unit": "ns",
            "range": "± 22816.388105087728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124912.26086956522,
            "unit": "ns",
            "range": "± 21793.99874442179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122566.6182795699,
            "unit": "ns",
            "range": "± 19903.462075865675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8983.181818181818,
            "unit": "ns",
            "range": "± 1096.1962188761158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24748.375,
            "unit": "ns",
            "range": "± 2618.8563324364563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1592095.9673913044,
            "unit": "ns",
            "range": "± 231999.57516707273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3007808.5517241377,
            "unit": "ns",
            "range": "± 224810.46157761113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2264114.2916666665,
            "unit": "ns",
            "range": "± 244441.43668470468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12114180.117977528,
            "unit": "ns",
            "range": "± 2381633.962116352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3287430.023809524,
            "unit": "ns",
            "range": "± 99727.46909758201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3348965.8139534886,
            "unit": "ns",
            "range": "± 172406.8654183375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4601514.525974026,
            "unit": "ns",
            "range": "± 230520.36857458492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4137717.470588235,
            "unit": "ns",
            "range": "± 132646.10942506065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20942269.89,
            "unit": "ns",
            "range": "± 3884884.092565302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6461230.261230469,
            "unit": "ns",
            "range": "± 120752.32872534449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851321.6685267857,
            "unit": "ns",
            "range": "± 18983.355411623677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146123.4598214286,
            "unit": "ns",
            "range": "± 31638.11122479847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3360967.0817649146,
            "unit": "ns",
            "range": "± 125284.01355344488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 929957.2120028409,
            "unit": "ns",
            "range": "± 39133.757604752034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 807019.0373883928,
            "unit": "ns",
            "range": "± 22871.818629604506"
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
          "id": "065a853f3002a398d0666e85502bd823d477b768",
          "message": "Fixed changelog due to reverting",
          "timestamp": "2023-12-17T16:05:29+09:00",
          "tree_id": "3c00699ed21dbef772b741b88a672b59f77cf114",
          "url": "https://github.com/greymistcube/libplanet/commit/065a853f3002a398d0666e85502bd823d477b768"
        },
        "date": 1702797936455,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9477733.162790697,
            "unit": "ns",
            "range": "± 1371959.495427562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20049281.458333332,
            "unit": "ns",
            "range": "± 461932.6980204291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54371886.07647059,
            "unit": "ns",
            "range": "± 6319139.873131628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123474567.04166667,
            "unit": "ns",
            "range": "± 21287747.97310503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249966218.54347825,
            "unit": "ns",
            "range": "± 29864467.342818074"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69454.71978021978,
            "unit": "ns",
            "range": "± 9402.310842201623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347553.55555555556,
            "unit": "ns",
            "range": "± 45856.74298605401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328932.7684210526,
            "unit": "ns",
            "range": "± 42405.06604631821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305317.8333333333,
            "unit": "ns",
            "range": "± 14350.688068825062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4120823.9210526315,
            "unit": "ns",
            "range": "± 89148.22480398449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3867115.7887323946,
            "unit": "ns",
            "range": "± 186769.21784551692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22047.375,
            "unit": "ns",
            "range": "± 3236.5016111454925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97697.3870967742,
            "unit": "ns",
            "range": "± 11714.802214025842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99958.11538461539,
            "unit": "ns",
            "range": "± 11107.352740684117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117089.33157894737,
            "unit": "ns",
            "range": "± 14011.435672679316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8522.53125,
            "unit": "ns",
            "range": "± 1109.3744415862197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24249.889473684212,
            "unit": "ns",
            "range": "± 2447.75668158182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1529250.414893617,
            "unit": "ns",
            "range": "± 212067.480470664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905756.034090909,
            "unit": "ns",
            "range": "± 208398.9280536967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2295461.6153846155,
            "unit": "ns",
            "range": "± 150896.0545574903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13491585.6875,
            "unit": "ns",
            "range": "± 3466624.0700539164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3964641.7386363638,
            "unit": "ns",
            "range": "± 527027.9259427611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3644411.112359551,
            "unit": "ns",
            "range": "± 373856.97814959433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4650271.904255319,
            "unit": "ns",
            "range": "± 536045.9454765373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4656597.027472528,
            "unit": "ns",
            "range": "± 679451.1681661464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21254646.385416668,
            "unit": "ns",
            "range": "± 4619887.557131519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6105777.949857955,
            "unit": "ns",
            "range": "± 259402.98859681236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1761294.4893329327,
            "unit": "ns",
            "range": "± 14437.610111013053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1066834.4884207589,
            "unit": "ns",
            "range": "± 12586.773879069831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3421473.791015625,
            "unit": "ns",
            "range": "± 127557.3438756554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 938939.1287109375,
            "unit": "ns",
            "range": "± 14530.482416024912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 897212.4625095275,
            "unit": "ns",
            "range": "± 32066.733572661975"
          }
        ]
      }
    ]
  }
}