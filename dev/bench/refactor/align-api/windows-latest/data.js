window.BENCHMARK_DATA = {
  "lastUpdate": 1688376920260,
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
          "id": "4eb356f93cfaee26859c79aa1416e4a1a8e498cb",
          "message": "Align TxResult nullability with TxSuccess",
          "timestamp": "2023-07-03T18:18:49+09:00",
          "tree_id": "e5e2c5e6b39c0cf7ee667f8c3115cbc0aac4ef71",
          "url": "https://github.com/greymistcube/libplanet/commit/4eb356f93cfaee26859c79aa1416e4a1a8e498cb"
        },
        "date": 1688376899360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1401967.3469387756,
            "unit": "ns",
            "range": "± 119709.03623275604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2614600,
            "unit": "ns",
            "range": "± 70852.35461045845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1867621.4285714286,
            "unit": "ns",
            "range": "± 139554.02844658447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4761855,
            "unit": "ns",
            "range": "± 167704.21603800866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48969.230769230766,
            "unit": "ns",
            "range": "± 2525.4577927451223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7216296,
            "unit": "ns",
            "range": "± 191143.04957282648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20281526.666666668,
            "unit": "ns",
            "range": "± 193687.73272854375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50090821.428571425,
            "unit": "ns",
            "range": "± 572711.0980356386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98419760,
            "unit": "ns",
            "range": "± 1026125.6925236512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198515007.14285713,
            "unit": "ns",
            "range": "± 1148568.8281604974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4789664.479166667,
            "unit": "ns",
            "range": "± 20632.478753205785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524727.845982143,
            "unit": "ns",
            "range": "± 3976.087900021633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176254.0364583333,
            "unit": "ns",
            "range": "± 5630.270446028742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639886.484375,
            "unit": "ns",
            "range": "± 8675.072084506659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831554.9674479166,
            "unit": "ns",
            "range": "± 2765.4671210586457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757656.5499441965,
            "unit": "ns",
            "range": "± 1958.46500747705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147226.6666666665,
            "unit": "ns",
            "range": "± 88629.58925750488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3406581.395348837,
            "unit": "ns",
            "range": "± 124893.73436534328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4139633.3333333335,
            "unit": "ns",
            "range": "± 119057.76150555091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3726755.102040816,
            "unit": "ns",
            "range": "± 146087.17440456644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6087670.588235294,
            "unit": "ns",
            "range": "± 98354.65650330111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267695.45454545453,
            "unit": "ns",
            "range": "± 9603.389773273848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256928,
            "unit": "ns",
            "range": "± 9929.137496709945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230616.30434782608,
            "unit": "ns",
            "range": "± 12899.699946880211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3983971.4285714286,
            "unit": "ns",
            "range": "± 53137.15820795823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3744635.714285714,
            "unit": "ns",
            "range": "± 64760.1326451682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21179.166666666668,
            "unit": "ns",
            "range": "± 1911.0160795085822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92712.5,
            "unit": "ns",
            "range": "± 6466.744890103847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76956.25,
            "unit": "ns",
            "range": "± 5158.2292453291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99801.02040816327,
            "unit": "ns",
            "range": "± 15578.495916824162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5702.1505376344085,
            "unit": "ns",
            "range": "± 750.9383252947256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20464.516129032258,
            "unit": "ns",
            "range": "± 1764.7296357337648"
          }
        ]
      }
    ]
  }
}