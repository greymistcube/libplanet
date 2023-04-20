window.BENCHMARK_DATA = {
  "lastUpdate": 1681991025010,
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
          "id": "7d4b5b60a38872ddfec0219cc7eaa548c043e4ce",
          "message": "Removed unnecessary parameter",
          "timestamp": "2023-04-20T19:36:11+09:00",
          "tree_id": "a0bfe316525f740b16a78054e4210e2e299290b3",
          "url": "https://github.com/greymistcube/libplanet/commit/7d4b5b60a38872ddfec0219cc7eaa548c043e4ce"
        },
        "date": 1681987797316,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7592179.4,
            "unit": "ns",
            "range": "± 11303.452075740906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19573433.4,
            "unit": "ns",
            "range": "± 49985.122807834385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51366602.46666667,
            "unit": "ns",
            "range": "± 907511.9214811502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99841346.8,
            "unit": "ns",
            "range": "± 369368.24858266924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199596410.92307693,
            "unit": "ns",
            "range": "± 630440.1602460593"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47065.8021978022,
            "unit": "ns",
            "range": "± 2588.8152340395245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1388811.38,
            "unit": "ns",
            "range": "± 108267.03436222639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2612485.588235294,
            "unit": "ns",
            "range": "± 51050.06360801476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2231938.5977011495,
            "unit": "ns",
            "range": "± 120838.39896578962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5657391.15,
            "unit": "ns",
            "range": "± 199789.68397581595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5869486.677604167,
            "unit": "ns",
            "range": "± 24433.05386614295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857611.1342075893,
            "unit": "ns",
            "range": "± 2094.1259078630965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357965.8170572917,
            "unit": "ns",
            "range": "± 398.2147171180496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596467.045479911,
            "unit": "ns",
            "range": "± 867.807427724268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830207.4759347098,
            "unit": "ns",
            "range": "± 417.7952989494282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736403.0184795673,
            "unit": "ns",
            "range": "± 436.39092208097725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337558.5135135135,
            "unit": "ns",
            "range": "± 11006.097745799376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268396.1836734694,
            "unit": "ns",
            "range": "± 8797.757909626438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242028.32258064515,
            "unit": "ns",
            "range": "± 7373.494772435916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5618080.571428572,
            "unit": "ns",
            "range": "± 20617.001579033993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3932802.0714285714,
            "unit": "ns",
            "range": "± 26175.31225429584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18859.645161290322,
            "unit": "ns",
            "range": "± 1182.3739536200712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90711.51315789473,
            "unit": "ns",
            "range": "± 4492.897136572856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78617.64285714286,
            "unit": "ns",
            "range": "± 3271.8245698057244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96784.01123595505,
            "unit": "ns",
            "range": "± 8901.421280149058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5465.2959183673465,
            "unit": "ns",
            "range": "± 815.9756188138421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17393.708333333332,
            "unit": "ns",
            "range": "± 1442.2942390267747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3204847.25,
            "unit": "ns",
            "range": "± 69969.49156100504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3439938,
            "unit": "ns",
            "range": "± 108246.25296401719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4220929.928571428,
            "unit": "ns",
            "range": "± 51142.34223519878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4419713.2,
            "unit": "ns",
            "range": "± 75416.78266729305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7164868.761904762,
            "unit": "ns",
            "range": "± 163929.54932192815"
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
          "id": "07a0bfe33087eea170e6ab99ce1fc100448c72dd",
          "message": "Combined render options",
          "timestamp": "2023-04-20T20:11:53+09:00",
          "tree_id": "f21ee4839635d60f4b5b7580e473117b28f48f2d",
          "url": "https://github.com/greymistcube/libplanet/commit/07a0bfe33087eea170e6ab99ce1fc100448c72dd"
        },
        "date": 1681990063825,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9379391.214285715,
            "unit": "ns",
            "range": "± 93073.96305435187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26940497.5,
            "unit": "ns",
            "range": "± 452425.7219817754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65652846.52941176,
            "unit": "ns",
            "range": "± 1307991.4027062696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134678054.66666666,
            "unit": "ns",
            "range": "± 2509190.477544833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250202522.86666667,
            "unit": "ns",
            "range": "± 4306678.558052246"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58295.231578947365,
            "unit": "ns",
            "range": "± 3812.6555369811495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634965.105882353,
            "unit": "ns",
            "range": "± 88061.53199191157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3178768.3488372094,
            "unit": "ns",
            "range": "± 117134.48722624932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2750343.1505376343,
            "unit": "ns",
            "range": "± 151860.5676296621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6702624.411764706,
            "unit": "ns",
            "range": "± 216192.6488074254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7231682.400669643,
            "unit": "ns",
            "range": "± 16246.284877260265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2210073.47109375,
            "unit": "ns",
            "range": "± 6112.927095186727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1602903.370703125,
            "unit": "ns",
            "range": "± 9097.99118393143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3059809.5315290177,
            "unit": "ns",
            "range": "± 14262.36985422553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989865.2950520833,
            "unit": "ns",
            "range": "± 5804.443492569684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 892502.1680338542,
            "unit": "ns",
            "range": "± 2763.934649045961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 398493.72222222225,
            "unit": "ns",
            "range": "± 8217.756404887246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327859.8787878788,
            "unit": "ns",
            "range": "± 10317.677426865432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272729.92307692306,
            "unit": "ns",
            "range": "± 4286.08783277436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6801652.785714285,
            "unit": "ns",
            "range": "± 97661.71083126187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4567399.133333334,
            "unit": "ns",
            "range": "± 71286.59071749616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23009.336842105262,
            "unit": "ns",
            "range": "± 1631.4296602655525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111463.07894736843,
            "unit": "ns",
            "range": "± 5638.119979244047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94661.34146341463,
            "unit": "ns",
            "range": "± 3367.455104450215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127157.81443298969,
            "unit": "ns",
            "range": "± 13665.022482395441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7413.166666666667,
            "unit": "ns",
            "range": "± 792.2773393554432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23065.626315789475,
            "unit": "ns",
            "range": "± 1659.4595136644948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4005008.9565217393,
            "unit": "ns",
            "range": "± 97898.39154054217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4316037.133333334,
            "unit": "ns",
            "range": "± 49420.29610518141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5055495.263157895,
            "unit": "ns",
            "range": "± 109703.38313624614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5280014.3,
            "unit": "ns",
            "range": "± 156847.43438881994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8787356.541666666,
            "unit": "ns",
            "range": "± 221798.82271494885"
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
          "id": "6721ce3b08e9324f50b146e197a443e95a1b2837",
          "message": "Combined render options",
          "timestamp": "2023-04-20T20:21:27+09:00",
          "tree_id": "5af8ba9308be94e705e44f41780c581976ad4fd5",
          "url": "https://github.com/greymistcube/libplanet/commit/6721ce3b08e9324f50b146e197a443e95a1b2837"
        },
        "date": 1681990484108,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7862562.133333334,
            "unit": "ns",
            "range": "± 62876.90432431867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19679192.266666666,
            "unit": "ns",
            "range": "± 62460.397765837726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50328007.2,
            "unit": "ns",
            "range": "± 225334.3538456322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100447547.92857143,
            "unit": "ns",
            "range": "± 364672.4409130145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201672601.93333334,
            "unit": "ns",
            "range": "± 230918.41228156342"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49005.895833333336,
            "unit": "ns",
            "range": "± 3727.6620257889226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1418787.7294117648,
            "unit": "ns",
            "range": "± 76492.4215078088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2689223.923076923,
            "unit": "ns",
            "range": "± 73580.08262671255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2292391.785714286,
            "unit": "ns",
            "range": "± 115656.44098379416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5660096.869565218,
            "unit": "ns",
            "range": "± 142642.6495526191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6313754.526227678,
            "unit": "ns",
            "range": "± 31447.085192342704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1971756.486049107,
            "unit": "ns",
            "range": "± 1641.3603797595026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363853.8928385417,
            "unit": "ns",
            "range": "± 544.7425535644402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2503849.691145833,
            "unit": "ns",
            "range": "± 1424.1686612817443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792290.269670759,
            "unit": "ns",
            "range": "± 767.7576795151317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734093.63828125,
            "unit": "ns",
            "range": "± 1252.0124098671565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340513.75,
            "unit": "ns",
            "range": "± 4111.370422377434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280143.5416666667,
            "unit": "ns",
            "range": "± 7263.993481724514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263227.0416666667,
            "unit": "ns",
            "range": "± 6744.100677978507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5668293.666666667,
            "unit": "ns",
            "range": "± 36455.77634353058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3933582.1428571427,
            "unit": "ns",
            "range": "± 18702.3268846713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21879.020833333332,
            "unit": "ns",
            "range": "± 1808.802342808876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99786.07070707071,
            "unit": "ns",
            "range": "± 8570.038857879335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81690.55,
            "unit": "ns",
            "range": "± 4263.28350280819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107115.35714285714,
            "unit": "ns",
            "range": "± 13128.338038557631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6979.114583333333,
            "unit": "ns",
            "range": "± 750.3243490902578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20956.083333333332,
            "unit": "ns",
            "range": "± 1465.8874205833683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307457.564102564,
            "unit": "ns",
            "range": "± 109432.25930919786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3501771.3125,
            "unit": "ns",
            "range": "± 49599.11397557924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4306514.785714285,
            "unit": "ns",
            "range": "± 46282.05392719493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4319453.513888889,
            "unit": "ns",
            "range": "± 209253.45144813633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7324040,
            "unit": "ns",
            "range": "± 76102.66158617582"
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
          "id": "0502d279af0a906c6d238c1a6cafb84283534766",
          "message": "Changelog",
          "timestamp": "2023-04-20T20:25:26+09:00",
          "tree_id": "6b586792b8a407850815e44c7ba432f12ced39ee",
          "url": "https://github.com/greymistcube/libplanet/commit/0502d279af0a906c6d238c1a6cafb84283534766"
        },
        "date": 1681991016091,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10577867.666666666,
            "unit": "ns",
            "range": "± 136730.98625824184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26999822.181818184,
            "unit": "ns",
            "range": "± 659873.5996921889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70098938.5,
            "unit": "ns",
            "range": "± 1239370.4209371014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141300097.53333333,
            "unit": "ns",
            "range": "± 1978230.8207734097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286861628.64705884,
            "unit": "ns",
            "range": "± 5661191.303366743"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82611.87912087912,
            "unit": "ns",
            "range": "± 7268.785163415725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1830509.752688172,
            "unit": "ns",
            "range": "± 125621.37216830997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3658848.5862068967,
            "unit": "ns",
            "range": "± 159322.8083192675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2995480.086956522,
            "unit": "ns",
            "range": "± 200406.1300639308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8101705.925531914,
            "unit": "ns",
            "range": "± 481754.670987109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7569355.6484375,
            "unit": "ns",
            "range": "± 34787.427623545605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2397856.775260417,
            "unit": "ns",
            "range": "± 33308.18828703654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1738952.3021334135,
            "unit": "ns",
            "range": "± 27426.50827587579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3347684.657645089,
            "unit": "ns",
            "range": "± 33169.708573656215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1089145.6712239583,
            "unit": "ns",
            "range": "± 11605.10089499484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 993193.068219866,
            "unit": "ns",
            "range": "± 9014.318721269301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 474463.54,
            "unit": "ns",
            "range": "± 18925.160376437434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 397538.61666666664,
            "unit": "ns",
            "range": "± 16086.727965847349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 363316.4038461539,
            "unit": "ns",
            "range": "± 14925.874062177561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7363381.761904762,
            "unit": "ns",
            "range": "± 165262.85655219224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5295466.761904762,
            "unit": "ns",
            "range": "± 124290.94614166583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28291.03370786517,
            "unit": "ns",
            "range": "± 2972.091853810583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 139574.14130434784,
            "unit": "ns",
            "range": "± 12525.23355451699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126550.21212121213,
            "unit": "ns",
            "range": "± 12779.563902425547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148654.2210526316,
            "unit": "ns",
            "range": "± 18025.590707810647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8965.472527472528,
            "unit": "ns",
            "range": "± 1164.1084938045876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27326.886363636364,
            "unit": "ns",
            "range": "± 2765.9537709080423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4520985.291666667,
            "unit": "ns",
            "range": "± 204315.91085936996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4765188.862068965,
            "unit": "ns",
            "range": "± 207654.86085147102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5847482.68,
            "unit": "ns",
            "range": "± 153589.4180455151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5855077.939393939,
            "unit": "ns",
            "range": "± 272482.1402309843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9844177.913043479,
            "unit": "ns",
            "range": "± 245716.38883678906"
          }
        ]
      }
    ]
  }
}