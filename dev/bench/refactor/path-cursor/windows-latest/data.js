window.BENCHMARK_DATA = {
  "lastUpdate": 1693049788385,
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
          "id": "cc132b5f96291ccfa235896df2d330a294d911e2",
          "message": "Added tests for Nibbles",
          "timestamp": "2023-08-25T10:07:07+09:00",
          "tree_id": "b06e47738ed0635ac7dc4a7169bbfe7bef373e64",
          "url": "https://github.com/greymistcube/libplanet/commit/cc132b5f96291ccfa235896df2d330a294d911e2"
        },
        "date": 1692927423178,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325601.0416666667,
            "unit": "ns",
            "range": "± 76387.42317918663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2527165.6716417912,
            "unit": "ns",
            "range": "± 119899.14897496499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1763879,
            "unit": "ns",
            "range": "± 134811.55144508317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4538466.153846154,
            "unit": "ns",
            "range": "± 211964.31323819218"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48323.40425531915,
            "unit": "ns",
            "range": "± 4092.858336383282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7355225,
            "unit": "ns",
            "range": "± 165999.79985720338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19964650,
            "unit": "ns",
            "range": "± 466601.02437990956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50458573.333333336,
            "unit": "ns",
            "range": "± 804706.3399301695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100334373.33333333,
            "unit": "ns",
            "range": "± 1741669.5813691719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203610930,
            "unit": "ns",
            "range": "± 4485759.259338027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4521320,
            "unit": "ns",
            "range": "± 22123.173523766778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1451421.6666666667,
            "unit": "ns",
            "range": "± 4716.341172614446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1076662.3958333333,
            "unit": "ns",
            "range": "± 3951.2092235405416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2655528.7760416665,
            "unit": "ns",
            "range": "± 7945.019384093746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832717.94921875,
            "unit": "ns",
            "range": "± 3505.8980015063976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773766.4322916666,
            "unit": "ns",
            "range": "± 2277.03422268398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3207123.214285714,
            "unit": "ns",
            "range": "± 137821.8929581633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3281161.7647058824,
            "unit": "ns",
            "range": "± 105019.99236712715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4033871.4285714286,
            "unit": "ns",
            "range": "± 151063.31591973832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3699746.875,
            "unit": "ns",
            "range": "± 226371.27117013812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5962421.621621622,
            "unit": "ns",
            "range": "± 200973.11060484234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254774.1935483871,
            "unit": "ns",
            "range": "± 7384.757623733518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239653.33333333334,
            "unit": "ns",
            "range": "± 9093.31922597324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213725.26315789475,
            "unit": "ns",
            "range": "± 12282.291078302082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4014752.9411764704,
            "unit": "ns",
            "range": "± 80265.19418190443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3666592,
            "unit": "ns",
            "range": "± 96739.19371175262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20481.25,
            "unit": "ns",
            "range": "± 2636.6371125276028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85780.20833333333,
            "unit": "ns",
            "range": "± 6265.504890676227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67823.80952380953,
            "unit": "ns",
            "range": "± 2972.601461179182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83404.08163265306,
            "unit": "ns",
            "range": "± 13866.16380375058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5058.163265306122,
            "unit": "ns",
            "range": "± 619.7644163974943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18260,
            "unit": "ns",
            "range": "± 1579.5604565685533"
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
          "id": "a2fd2a4e159333d8f0029b1d740961f3c626bdfb",
          "message": "Change PathCursor to use Nibbles internally",
          "timestamp": "2023-08-25T12:44:09+09:00",
          "tree_id": "2472422cfbcf5b4a784b1bd60909baa5f2d8bb88",
          "url": "https://github.com/greymistcube/libplanet/commit/a2fd2a4e159333d8f0029b1d740961f3c626bdfb"
        },
        "date": 1692936331701,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574398.8764044943,
            "unit": "ns",
            "range": "± 86981.37273732026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2932536.111111111,
            "unit": "ns",
            "range": "± 97468.11391505803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2038713.1868131869,
            "unit": "ns",
            "range": "± 113403.28156019238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5429368.181818182,
            "unit": "ns",
            "range": "± 274823.4029753771"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55337.63440860215,
            "unit": "ns",
            "range": "± 3179.2094306636313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8815135.714285715,
            "unit": "ns",
            "range": "± 79043.1489479284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24383978.57142857,
            "unit": "ns",
            "range": "± 127785.75326014921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61658692.85714286,
            "unit": "ns",
            "range": "± 789156.4117795326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124681002.94117647,
            "unit": "ns",
            "range": "± 3923978.2669744818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250675242.10526314,
            "unit": "ns",
            "range": "± 5451707.459575882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5468155.625,
            "unit": "ns",
            "range": "± 55710.45349773854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1725368.046875,
            "unit": "ns",
            "range": "± 24365.497861466283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1307167.9166666667,
            "unit": "ns",
            "range": "± 16208.025525335821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3201806.6666666665,
            "unit": "ns",
            "range": "± 52589.46832912115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1034105.1953125,
            "unit": "ns",
            "range": "± 18937.427808567343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938411.7954799107,
            "unit": "ns",
            "range": "± 7908.849309356594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3922811.111111111,
            "unit": "ns",
            "range": "± 77385.7631600883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4190384.6153846155,
            "unit": "ns",
            "range": "± 144177.6947097638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4888491.891891892,
            "unit": "ns",
            "range": "± 154229.94445232017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436691.176470588,
            "unit": "ns",
            "range": "± 140890.39016554048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7023090.476190476,
            "unit": "ns",
            "range": "± 143934.85298829433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296561.76470588235,
            "unit": "ns",
            "range": "± 9510.337747113459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290569.23076923075,
            "unit": "ns",
            "range": "± 7561.680724853132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258325,
            "unit": "ns",
            "range": "± 13057.086198689201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4800800,
            "unit": "ns",
            "range": "± 34128.97107541724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4305591.666666667,
            "unit": "ns",
            "range": "± 29021.542416667384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23272.63157894737,
            "unit": "ns",
            "range": "± 1669.9115854581883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97185.41666666667,
            "unit": "ns",
            "range": "± 5611.228951921066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83110.9756097561,
            "unit": "ns",
            "range": "± 4420.463248657442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93821.64948453609,
            "unit": "ns",
            "range": "± 14353.10816225969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6125.531914893617,
            "unit": "ns",
            "range": "± 735.130179417848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22485.263157894737,
            "unit": "ns",
            "range": "± 1811.016431487462"
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
          "id": "6acc2e881bbc5f01c32244539464172d961227b4",
          "message": "Change PathCursor to use Nibbles internally",
          "timestamp": "2023-08-26T17:32:19+09:00",
          "tree_id": "2472422cfbcf5b4a784b1bd60909baa5f2d8bb88",
          "url": "https://github.com/greymistcube/libplanet/commit/6acc2e881bbc5f01c32244539464172d961227b4"
        },
        "date": 1693039652189,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1287772.448979592,
            "unit": "ns",
            "range": "± 85330.79692126998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2434692.3076923075,
            "unit": "ns",
            "range": "± 97083.2063710095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1649424.4897959183,
            "unit": "ns",
            "range": "± 102390.72330445358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4586013,
            "unit": "ns",
            "range": "± 291508.25261807675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47135.89743589744,
            "unit": "ns",
            "range": "± 2444.9775904730536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7222385.714285715,
            "unit": "ns",
            "range": "± 32512.999935951233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20561600,
            "unit": "ns",
            "range": "± 207745.065663886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50607909.09090909,
            "unit": "ns",
            "range": "± 1201149.5101059256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99385186.66666667,
            "unit": "ns",
            "range": "± 1491611.8136655618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197793635.7142857,
            "unit": "ns",
            "range": "± 2866243.9779150113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4551999.583333333,
            "unit": "ns",
            "range": "± 20639.332101153508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1421521.8619791667,
            "unit": "ns",
            "range": "± 6813.300927939779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1058799.9248798077,
            "unit": "ns",
            "range": "± 2259.030968718305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633766.9270833335,
            "unit": "ns",
            "range": "± 12405.320712446071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836249.0513392857,
            "unit": "ns",
            "range": "± 2040.2453709630704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760774.7330729166,
            "unit": "ns",
            "range": "± 2418.8765194456996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3199845.8333333335,
            "unit": "ns",
            "range": "± 126140.75042760652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3279647.0588235296,
            "unit": "ns",
            "range": "± 94436.07501275462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4020356.25,
            "unit": "ns",
            "range": "± 72359.73068634239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3599615.5172413792,
            "unit": "ns",
            "range": "± 157964.57830983805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5909394.871794872,
            "unit": "ns",
            "range": "± 204177.563266463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254808,
            "unit": "ns",
            "range": "± 6511.907042743572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250516.66666666666,
            "unit": "ns",
            "range": "± 10351.023101379062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210786.27450980392,
            "unit": "ns",
            "range": "± 7916.262239411809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3995257.8947368423,
            "unit": "ns",
            "range": "± 88317.51629326161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3636987.5,
            "unit": "ns",
            "range": "± 69133.56999316612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19251.063829787236,
            "unit": "ns",
            "range": "± 1800.0295505848574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85360.82474226804,
            "unit": "ns",
            "range": "± 6294.153317117515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66956.25,
            "unit": "ns",
            "range": "± 2046.3874542479061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86879.59183673469,
            "unit": "ns",
            "range": "± 14394.493213838117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4887.755102040816,
            "unit": "ns",
            "range": "± 651.7645052735885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19276.842105263157,
            "unit": "ns",
            "range": "± 1689.356709468225"
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
          "id": "091c8cade02e5b9a1fbbe8e0fc3b6c27795c479a",
          "message": "Propogate Nibbles",
          "timestamp": "2023-08-26T19:52:29+09:00",
          "tree_id": "12b9d5c5cc927c8a7ea5781b4c5a7245697a1363",
          "url": "https://github.com/greymistcube/libplanet/commit/091c8cade02e5b9a1fbbe8e0fc3b6c27795c479a"
        },
        "date": 1693049766058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1324746.4646464647,
            "unit": "ns",
            "range": "± 91247.36989570681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2455388,
            "unit": "ns",
            "range": "± 121641.11142697271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1669933,
            "unit": "ns",
            "range": "± 140611.4418774969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4534307.216494845,
            "unit": "ns",
            "range": "± 258376.90543057388"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46993.75,
            "unit": "ns",
            "range": "± 3093.6543711961513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7142800,
            "unit": "ns",
            "range": "± 37562.31745123951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20384300,
            "unit": "ns",
            "range": "± 316761.6454055004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51618594.44444445,
            "unit": "ns",
            "range": "± 1033916.3047662214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102044513.33333333,
            "unit": "ns",
            "range": "± 1617117.8152444407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200670133.33333334,
            "unit": "ns",
            "range": "± 2439783.4876616956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4544144.010416667,
            "unit": "ns",
            "range": "± 59746.55016905435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1460811.7447916667,
            "unit": "ns",
            "range": "± 17263.68248058997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1065897.626201923,
            "unit": "ns",
            "range": "± 3327.1908952411663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641896.3727678573,
            "unit": "ns",
            "range": "± 21478.798792406054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842006.6476004465,
            "unit": "ns",
            "range": "± 10265.009517744898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782633.5030691965,
            "unit": "ns",
            "range": "± 2954.6365743136216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3191866.6666666665,
            "unit": "ns",
            "range": "± 107596.65573428967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3445317.8571428573,
            "unit": "ns",
            "range": "± 97284.92728434132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4074245.1612903224,
            "unit": "ns",
            "range": "± 121973.91753624947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3618396.6666666665,
            "unit": "ns",
            "range": "± 107651.19114075322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5997977.777777778,
            "unit": "ns",
            "range": "± 199189.46058049658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253285.7142857143,
            "unit": "ns",
            "range": "± 10099.216141199606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239616.07142857142,
            "unit": "ns",
            "range": "± 9133.41072975707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209150,
            "unit": "ns",
            "range": "± 11074.702000065008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3991016.6666666665,
            "unit": "ns",
            "range": "± 48176.55660236217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3667960.8695652173,
            "unit": "ns",
            "range": "± 92428.47229138095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18905.263157894737,
            "unit": "ns",
            "range": "± 1846.8125744997371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81792.13483146067,
            "unit": "ns",
            "range": "± 4843.135364970927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65733.89830508475,
            "unit": "ns",
            "range": "± 2912.1984922812794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80050,
            "unit": "ns",
            "range": "± 14547.44282626693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4984.210526315789,
            "unit": "ns",
            "range": "± 720.8617463389401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18535.263157894737,
            "unit": "ns",
            "range": "± 1345.992350919797"
          }
        ]
      }
    ]
  }
}