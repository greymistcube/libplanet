window.BENCHMARK_DATA = {
  "lastUpdate": 1682677569941,
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
          "id": "fe1b7be5dbef726cda8b35ac5aa658e6ae372266",
          "message": "Partially removed t from transaction",
          "timestamp": "2023-04-28T18:39:17+09:00",
          "tree_id": "f6b5624d4eb813142323df63ac2449af272bad92",
          "url": "https://github.com/greymistcube/libplanet/commit/fe1b7be5dbef726cda8b35ac5aa658e6ae372266"
        },
        "date": 1682676470448,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7874296.05882353,
            "unit": "ns",
            "range": "± 153466.10541967835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23158353.2875,
            "unit": "ns",
            "range": "± 1210702.6702115585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55059333.90243903,
            "unit": "ns",
            "range": "± 1978503.1779962322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102340940.68367347,
            "unit": "ns",
            "range": "± 6455737.7561834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225133324.17021278,
            "unit": "ns",
            "range": "± 8719447.772520967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80818.31818181818,
            "unit": "ns",
            "range": "± 18041.56781919931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394768.26744186046,
            "unit": "ns",
            "range": "± 54557.77959782894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368363.4597701149,
            "unit": "ns",
            "range": "± 41281.74611690465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 364127.702247191,
            "unit": "ns",
            "range": "± 41584.04517036983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4828758.685393258,
            "unit": "ns",
            "range": "± 467389.49763701065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4285747.706521739,
            "unit": "ns",
            "range": "± 475461.8342813287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31143.321052631578,
            "unit": "ns",
            "range": "± 3931.335499300806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125904.19565217392,
            "unit": "ns",
            "range": "± 9971.324880545588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129627.97752808989,
            "unit": "ns",
            "range": "± 9627.4384797467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135781.92708333334,
            "unit": "ns",
            "range": "± 19629.08668800343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9359.994623655914,
            "unit": "ns",
            "range": "± 1350.0991640202478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23814.40425531915,
            "unit": "ns",
            "range": "± 4951.836584061565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1772002.1176470588,
            "unit": "ns",
            "range": "± 208854.9417461117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3313819.5568181816,
            "unit": "ns",
            "range": "± 370836.0302039616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2730772.102272727,
            "unit": "ns",
            "range": "± 247966.07023621543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8786105.644444445,
            "unit": "ns",
            "range": "± 2156458.8684456707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3482423.3041237113,
            "unit": "ns",
            "range": "± 249797.68674117557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4012512.3608247424,
            "unit": "ns",
            "range": "± 581500.021341039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4981848.360824742,
            "unit": "ns",
            "range": "± 436079.11027289496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4825135.145161291,
            "unit": "ns",
            "range": "± 459038.58808008453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8154775.22631579,
            "unit": "ns",
            "range": "± 486928.07857619284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6959970.911892361,
            "unit": "ns",
            "range": "± 194889.57260243755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2011206.6856971155,
            "unit": "ns",
            "range": "± 22189.36338265049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1328597.388671875,
            "unit": "ns",
            "range": "± 18851.842629485007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2820127.9895148026,
            "unit": "ns",
            "range": "± 54268.09775994577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924301.9453776042,
            "unit": "ns",
            "range": "± 17153.528121377418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 828072.6310686384,
            "unit": "ns",
            "range": "± 9809.035779453254"
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
          "id": "7f194abb611a038ebed510e3d018980e945c326c",
          "message": "Partially removed t from transaction",
          "timestamp": "2023-04-28T19:02:49+09:00",
          "tree_id": "21ae5700d32b3587eb21a0a9ad3d3c38553cfdd0",
          "url": "https://github.com/greymistcube/libplanet/commit/7f194abb611a038ebed510e3d018980e945c326c"
        },
        "date": 1682677547515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9652999.987951808,
            "unit": "ns",
            "range": "± 932137.8539676034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 33771045.32795699,
            "unit": "ns",
            "range": "± 6933909.617939193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 88003689.14736842,
            "unit": "ns",
            "range": "± 32124142.44155419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149351821.5670103,
            "unit": "ns",
            "range": "± 32834961.930398617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244369271.91666666,
            "unit": "ns",
            "range": "± 3171094.485068565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77438.52083333333,
            "unit": "ns",
            "range": "± 13211.162122657504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408813.75581395347,
            "unit": "ns",
            "range": "± 34694.3078827522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 400623.59574468085,
            "unit": "ns",
            "range": "± 42894.67773294626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336306.60215053766,
            "unit": "ns",
            "range": "± 22789.922666722956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4960920.36,
            "unit": "ns",
            "range": "± 128190.9329613058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4618688.884615385,
            "unit": "ns",
            "range": "± 124110.11036118757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23360.426315789475,
            "unit": "ns",
            "range": "± 2721.884763307522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111418.03157894737,
            "unit": "ns",
            "range": "± 9354.130707138222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116044.4,
            "unit": "ns",
            "range": "± 13144.210123642579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119302.61956521739,
            "unit": "ns",
            "range": "± 13983.867052957057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6449.71875,
            "unit": "ns",
            "range": "± 882.7793096462296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20595.927083333332,
            "unit": "ns",
            "range": "± 2593.9862972684855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2075364.0934065934,
            "unit": "ns",
            "range": "± 257524.37558297176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4028194.0681818184,
            "unit": "ns",
            "range": "± 664384.3386760372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3446433.3448275863,
            "unit": "ns",
            "range": "± 621797.969734914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16435165.164948454,
            "unit": "ns",
            "range": "± 6288615.824640342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4300582.386363637,
            "unit": "ns",
            "range": "± 596289.8597419249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4420847.2,
            "unit": "ns",
            "range": "± 417066.3497807814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5584424.804597701,
            "unit": "ns",
            "range": "± 327430.0512172574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5445744.781609195,
            "unit": "ns",
            "range": "± 659146.2243592336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9632710.101265823,
            "unit": "ns",
            "range": "± 472632.8877735271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7408937.845775463,
            "unit": "ns",
            "range": "± 201967.4083567862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2261865.604765625,
            "unit": "ns",
            "range": "± 82908.28469747247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1522614.336216518,
            "unit": "ns",
            "range": "± 11544.147096645554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2980004.1140625,
            "unit": "ns",
            "range": "± 33068.188107921786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1026571.7200520834,
            "unit": "ns",
            "range": "± 5400.298745246946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924577.4060872396,
            "unit": "ns",
            "range": "± 4244.350854301394"
          }
        ]
      }
    ]
  }
}