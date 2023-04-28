window.BENCHMARK_DATA = {
  "lastUpdate": 1682676487905,
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
      }
    ]
  }
}