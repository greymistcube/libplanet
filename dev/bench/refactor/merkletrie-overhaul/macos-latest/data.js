window.BENCHMARK_DATA = {
  "lastUpdate": 1692760176660,
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
          "id": "72d80bf51c0bcd6f41f280d72148bd74355e6f3e",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T01:00:48+09:00",
          "tree_id": "14da1eae20fc142705db54b95adc7312a8ddc449",
          "url": "https://github.com/greymistcube/libplanet/commit/72d80bf51c0bcd6f41f280d72148bd74355e6f3e"
        },
        "date": 1692721321537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9682735.018518519,
            "unit": "ns",
            "range": "± 402400.6706732047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22141505.890625,
            "unit": "ns",
            "range": "± 1023759.1967661352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55334589.5,
            "unit": "ns",
            "range": "± 588965.5991941425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107876814.05,
            "unit": "ns",
            "range": "± 2444981.5957695115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223085093.73076922,
            "unit": "ns",
            "range": "± 3656268.8262725603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76075.94382022473,
            "unit": "ns",
            "range": "± 7794.1816008066835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356278.12765957444,
            "unit": "ns",
            "range": "± 49632.66166937609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336399.9680851064,
            "unit": "ns",
            "range": "± 37592.31034799598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306048.2380952381,
            "unit": "ns",
            "range": "± 11027.20387586884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4462001.489361702,
            "unit": "ns",
            "range": "± 307328.02392688877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3817107.376344086,
            "unit": "ns",
            "range": "± 221102.33193001247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25871.935483870966,
            "unit": "ns",
            "range": "± 4305.847259974186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113316.32631578947,
            "unit": "ns",
            "range": "± 17445.72130586027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110122.58536585367,
            "unit": "ns",
            "range": "± 7083.234296390384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117222.68085106384,
            "unit": "ns",
            "range": "± 18365.230931313923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8014.6505376344085,
            "unit": "ns",
            "range": "± 1263.0253788134592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23579.60989010989,
            "unit": "ns",
            "range": "± 3839.654360748141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1703390.2444444445,
            "unit": "ns",
            "range": "± 239416.36642321158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3076896.263736264,
            "unit": "ns",
            "range": "± 310674.2612871714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2138717.5853658537,
            "unit": "ns",
            "range": "± 255386.66940437932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9442673.275510205,
            "unit": "ns",
            "range": "± 4261864.719876492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3525032.9615384615,
            "unit": "ns",
            "range": "± 273001.1504695461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3509740.7108433736,
            "unit": "ns",
            "range": "± 184336.97601116213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4620851.715053763,
            "unit": "ns",
            "range": "± 347089.3776307245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4157201.4210526315,
            "unit": "ns",
            "range": "± 422681.7940949317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7936774.301075269,
            "unit": "ns",
            "range": "± 1096301.249780625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6056613.39703125,
            "unit": "ns",
            "range": "± 157630.22472548837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1764259.629076087,
            "unit": "ns",
            "range": "± 43505.046150548456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1059337.8985523898,
            "unit": "ns",
            "range": "± 21087.350201012974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2875480.6915838066,
            "unit": "ns",
            "range": "± 67596.2332904843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814854.2044921875,
            "unit": "ns",
            "range": "± 7371.097883063473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737850.1261067708,
            "unit": "ns",
            "range": "± 10248.985420080295"
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
          "id": "eb95d966fb4b2ecaee383c85106a926bb89ad433",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T02:44:52+09:00",
          "tree_id": "1c2221d703d8ff464fdfc85ea909a5815ba6f6c9",
          "url": "https://github.com/greymistcube/libplanet/commit/eb95d966fb4b2ecaee383c85106a926bb89ad433"
        },
        "date": 1692756732392,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7909543.757575758,
            "unit": "ns",
            "range": "± 471060.03432168247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18912381.401960783,
            "unit": "ns",
            "range": "± 683095.1825953468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47794517.4625,
            "unit": "ns",
            "range": "± 2499872.219844385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96677700.39361702,
            "unit": "ns",
            "range": "± 3765147.802350176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203281353.86363637,
            "unit": "ns",
            "range": "± 4785915.591756348"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54860.043956043955,
            "unit": "ns",
            "range": "± 5059.563834763467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298838.829787234,
            "unit": "ns",
            "range": "± 20039.187750284345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287736.8222222222,
            "unit": "ns",
            "range": "± 18074.879821241124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287759.6954022989,
            "unit": "ns",
            "range": "± 15609.045056557847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3972955.0714285714,
            "unit": "ns",
            "range": "± 62127.9916901878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3662613.6428571427,
            "unit": "ns",
            "range": "± 48147.70508247295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17794.184782608696,
            "unit": "ns",
            "range": "± 1355.7490685627424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81970.9052631579,
            "unit": "ns",
            "range": "± 8071.94153010275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80877.6836734694,
            "unit": "ns",
            "range": "± 9411.577786967662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89900.28947368421,
            "unit": "ns",
            "range": "± 11583.922698415541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4906.565934065934,
            "unit": "ns",
            "range": "± 523.1126244190804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16811.90425531915,
            "unit": "ns",
            "range": "± 1411.7068546346857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1498081.144329897,
            "unit": "ns",
            "range": "± 160559.17966717327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2848376.4166666665,
            "unit": "ns",
            "range": "± 149489.17681676627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2024560.2577319588,
            "unit": "ns",
            "range": "± 194018.6285924669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5501475.241758241,
            "unit": "ns",
            "range": "± 339624.0547583735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3253150.88,
            "unit": "ns",
            "range": "± 130871.33722514471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4011388.329787234,
            "unit": "ns",
            "range": "± 153596.07939520816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4293788.0344827585,
            "unit": "ns",
            "range": "± 172311.5907966611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3824829.836734694,
            "unit": "ns",
            "range": "± 285029.958912477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6535241.958333333,
            "unit": "ns",
            "range": "± 162033.2136382992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5603244.449678309,
            "unit": "ns",
            "range": "± 179607.44737301275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1628837.016796875,
            "unit": "ns",
            "range": "± 8012.854637072355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1004295.829938616,
            "unit": "ns",
            "range": "± 3298.2132274084256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2726492.0494791665,
            "unit": "ns",
            "range": "± 86007.85265377734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 779865.3835100447,
            "unit": "ns",
            "range": "± 2740.812503040747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 704942.1119140625,
            "unit": "ns",
            "range": "± 4141.513047655598"
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
          "id": "3b96a2a316b65b789a91e6ea84e1dc99e51684d1",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T11:47:16+09:00",
          "tree_id": "de9d901982dab57d16642ea8d522c2a38d0498c3",
          "url": "https://github.com/greymistcube/libplanet/commit/3b96a2a316b65b789a91e6ea84e1dc99e51684d1"
        },
        "date": 1692760163622,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8441109,
            "unit": "ns",
            "range": "± 82853.62024656218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28897341.302083332,
            "unit": "ns",
            "range": "± 3040396.567897559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64958111.40909091,
            "unit": "ns",
            "range": "± 12561979.685649795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125382660.5,
            "unit": "ns",
            "range": "± 26324660.636083793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 326150865.8636364,
            "unit": "ns",
            "range": "± 85692243.83850136"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75427.01086956522,
            "unit": "ns",
            "range": "± 8641.688220919155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355864.5402298851,
            "unit": "ns",
            "range": "± 69408.91212560944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340691.8085106383,
            "unit": "ns",
            "range": "± 63835.428958053046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317817.1976744186,
            "unit": "ns",
            "range": "± 25685.043777204966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4388941.119565218,
            "unit": "ns",
            "range": "± 322053.54679163755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4527352.739583333,
            "unit": "ns",
            "range": "± 325851.53548136464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20899.68817204301,
            "unit": "ns",
            "range": "± 3439.182789617623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107395.21111111112,
            "unit": "ns",
            "range": "± 17237.322749734856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110251.58235294117,
            "unit": "ns",
            "range": "± 9240.007496146934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93912.94845360825,
            "unit": "ns",
            "range": "± 12303.897705072919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6364.082474226804,
            "unit": "ns",
            "range": "± 1329.2815859680802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21553.473684210527,
            "unit": "ns",
            "range": "± 3497.39804451065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1677059.7816091955,
            "unit": "ns",
            "range": "± 237089.5238282919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3171005.7906976743,
            "unit": "ns",
            "range": "± 312278.8145742563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2292776.2976190476,
            "unit": "ns",
            "range": "± 447487.7822269613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5613130.348837209,
            "unit": "ns",
            "range": "± 409299.42195278354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3829711.5804597703,
            "unit": "ns",
            "range": "± 363300.7724725405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3783347.967032967,
            "unit": "ns",
            "range": "± 512771.49393893336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5047332.291208792,
            "unit": "ns",
            "range": "± 862456.5195423993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4182579.6222222224,
            "unit": "ns",
            "range": "± 390340.5533689717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9974306.484536082,
            "unit": "ns",
            "range": "± 3014396.7622022205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5902773.46116728,
            "unit": "ns",
            "range": "± 185870.2889594473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1780239.4447916667,
            "unit": "ns",
            "range": "± 26100.709350307665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1086754.7991153493,
            "unit": "ns",
            "range": "± 51702.59061661178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669471.600123355,
            "unit": "ns",
            "range": "± 114716.20949220394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865540.5386067708,
            "unit": "ns",
            "range": "± 12448.787054694074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 863186.256640625,
            "unit": "ns",
            "range": "± 12118.218849669298"
          }
        ]
      }
    ]
  }
}