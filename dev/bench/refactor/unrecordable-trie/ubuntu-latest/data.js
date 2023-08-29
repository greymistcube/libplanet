window.BENCHMARK_DATA = {
  "lastUpdate": 1693298893243,
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
          "id": "fefd69f5a1ecaf4665b7cebac86d4bae83bf4ccc",
          "message": "Update changelog",
          "timestamp": "2023-08-29T17:25:43+09:00",
          "tree_id": "141691f335aa09b4e2357713cdc829d1cecafe60",
          "url": "https://github.com/greymistcube/libplanet/commit/fefd69f5a1ecaf4665b7cebac86d4bae83bf4ccc"
        },
        "date": 1693298334628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1347137.0957446808,
            "unit": "ns",
            "range": "± 86987.15484200449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606357.081081081,
            "unit": "ns",
            "range": "± 79385.50774941313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1775609.6907216494,
            "unit": "ns",
            "range": "± 143694.1096484967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4525425.592592592,
            "unit": "ns",
            "range": "± 126777.79567151197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282362.4375,
            "unit": "ns",
            "range": "± 5298.7622827568575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266475.4864864865,
            "unit": "ns",
            "range": "± 8944.295160795144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235348.92156862744,
            "unit": "ns",
            "range": "± 9410.325547701605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4321860.533333333,
            "unit": "ns",
            "range": "± 33644.693601701605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3915503.7333333334,
            "unit": "ns",
            "range": "± 34334.80296073331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22146.360824742267,
            "unit": "ns",
            "range": "± 1646.8540665055846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101603.05434782608,
            "unit": "ns",
            "range": "± 6942.652184047693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74675,
            "unit": "ns",
            "range": "± 1185.1863425920276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78194.85714285714,
            "unit": "ns",
            "range": "± 10073.080084649013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5193.8877551020405,
            "unit": "ns",
            "range": "± 568.9231985320147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18962.637362637364,
            "unit": "ns",
            "range": "± 1612.3584073336901"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48403.634146341465,
            "unit": "ns",
            "range": "± 2577.2301118999503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8250068.571428572,
            "unit": "ns",
            "range": "± 38159.95038239454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20243961.733333334,
            "unit": "ns",
            "range": "± 59042.314584501495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52475416.15384615,
            "unit": "ns",
            "range": "± 138232.60937145413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105254198.78571428,
            "unit": "ns",
            "range": "± 319515.4985409528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210616796.42857143,
            "unit": "ns",
            "range": "± 1014783.7610154054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3396125.4,
            "unit": "ns",
            "range": "± 40046.28424853279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3568198.533333333,
            "unit": "ns",
            "range": "± 65299.966639530605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4491608.833333333,
            "unit": "ns",
            "range": "± 96092.60885223905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4025704.6666666665,
            "unit": "ns",
            "range": "± 53810.20172350043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6325720.617647059,
            "unit": "ns",
            "range": "± 201660.05157495377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5235411.5,
            "unit": "ns",
            "range": "± 4539.185020041996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1574465.2996651786,
            "unit": "ns",
            "range": "± 1248.4211235147866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070530.749609375,
            "unit": "ns",
            "range": "± 1517.972604312531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539690.330636161,
            "unit": "ns",
            "range": "± 6240.89978378761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805681.6853966346,
            "unit": "ns",
            "range": "± 1270.547740231489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744556.6271484375,
            "unit": "ns",
            "range": "± 549.7857647383809"
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
          "id": "5d14d199aa77b76bae7c611bf121ea9de702df23",
          "message": "Remove Set() from IRecordableTrie",
          "timestamp": "2023-08-29T17:23:26+09:00",
          "tree_id": "6eb0630752eb3a2d5f6adff105778ceb565a0fc7",
          "url": "https://github.com/greymistcube/libplanet/commit/5d14d199aa77b76bae7c611bf121ea9de702df23"
        },
        "date": 1693298881828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640625.4210526317,
            "unit": "ns",
            "range": "± 177912.60496979966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3258072.0416666665,
            "unit": "ns",
            "range": "± 361306.7945211314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2119951.793814433,
            "unit": "ns",
            "range": "± 264459.38226274063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6230952.774193549,
            "unit": "ns",
            "range": "± 459060.47578654863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356837.6105263158,
            "unit": "ns",
            "range": "± 48684.239766744286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366381.5918367347,
            "unit": "ns",
            "range": "± 53962.18989462379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311343.2083333333,
            "unit": "ns",
            "range": "± 44391.74698354275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5774206.078651685,
            "unit": "ns",
            "range": "± 520330.38978302537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5021616.944444444,
            "unit": "ns",
            "range": "± 390467.5707886107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23323.39534883721,
            "unit": "ns",
            "range": "± 3676.580477368386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111551.71276595745,
            "unit": "ns",
            "range": "± 15805.878137968431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127651.07692307692,
            "unit": "ns",
            "range": "± 19439.672681418375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125314.63829787234,
            "unit": "ns",
            "range": "± 26904.12918176418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7483.56043956044,
            "unit": "ns",
            "range": "± 1340.6748318066554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26850.11224489796,
            "unit": "ns",
            "range": "± 9197.439194120245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66840.15053763441,
            "unit": "ns",
            "range": "± 12267.054282974374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9419421.329896906,
            "unit": "ns",
            "range": "± 856172.0174845454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26045253.107526883,
            "unit": "ns",
            "range": "± 1625184.5638176757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67004574.596491225,
            "unit": "ns",
            "range": "± 2886162.183403123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139674153.1818182,
            "unit": "ns",
            "range": "± 4419826.040077726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279315680.83,
            "unit": "ns",
            "range": "± 19248254.453954924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3878137.326530612,
            "unit": "ns",
            "range": "± 446882.15058931994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4894949.208333333,
            "unit": "ns",
            "range": "± 646361.5328860778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5870135.347368421,
            "unit": "ns",
            "range": "± 559819.8418887795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4995997.546391753,
            "unit": "ns",
            "range": "± 618893.6243119993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7801601.708333333,
            "unit": "ns",
            "range": "± 700890.5056652897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6012256.822285353,
            "unit": "ns",
            "range": "± 456245.0649365662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1823256.0662802418,
            "unit": "ns",
            "range": "± 54572.283860600466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407583.776199495,
            "unit": "ns",
            "range": "± 119183.99691181711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3345858.27046875,
            "unit": "ns",
            "range": "± 298453.43597418367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996499.6456640625,
            "unit": "ns",
            "range": "± 67217.02554561828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867764.6462751116,
            "unit": "ns",
            "range": "± 24449.52060927232"
          }
        ]
      }
    ]
  }
}