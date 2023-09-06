window.BENCHMARK_DATA = {
  "lastUpdate": 1693963399868,
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
          "id": "ad38230c09d5cc9bd0ac62a5cfd2c9c9fea4e9ff",
          "message": "Partial rollback for better API backward compatibility",
          "timestamp": "2023-09-06T10:05:14+09:00",
          "tree_id": "4b9e90624befad25a05a2d08390eddc4eeea7721",
          "url": "https://github.com/greymistcube/libplanet/commit/ad38230c09d5cc9bd0ac62a5cfd2c9c9fea4e9ff"
        },
        "date": 1693963390495,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713946.034883721,
            "unit": "ns",
            "range": "± 90802.81850412402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3265400.3703703703,
            "unit": "ns",
            "range": "± 90396.8520678714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2171862.2835820895,
            "unit": "ns",
            "range": "± 84613.56950452541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5374273.684210527,
            "unit": "ns",
            "range": "± 119332.23637906091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344359.5853658537,
            "unit": "ns",
            "range": "± 12217.905788177468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328965.08771929826,
            "unit": "ns",
            "range": "± 13406.843859015627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304507.85,
            "unit": "ns",
            "range": "± 10819.723949154039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5454713.357142857,
            "unit": "ns",
            "range": "± 23313.00252453105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5122276.342857143,
            "unit": "ns",
            "range": "± 164735.6378397438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27214.4,
            "unit": "ns",
            "range": "± 2221.8536654420564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117915.84848484848,
            "unit": "ns",
            "range": "± 9553.117821395379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103258.61458333333,
            "unit": "ns",
            "range": "± 6731.801928739815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112873.60204081633,
            "unit": "ns",
            "range": "± 13104.222502367018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8474.114583333334,
            "unit": "ns",
            "range": "± 1236.5618282777084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27156.822916666668,
            "unit": "ns",
            "range": "± 2856.8139890989405"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62626.3870967742,
            "unit": "ns",
            "range": "± 5315.190014666044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10280783.8,
            "unit": "ns",
            "range": "± 170453.9848229679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27067793.92857143,
            "unit": "ns",
            "range": "± 238070.0413570841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73064957.37037037,
            "unit": "ns",
            "range": "± 2046770.1526787393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146895511.6470588,
            "unit": "ns",
            "range": "± 2957645.8775093188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277475021.1315789,
            "unit": "ns",
            "range": "± 8968819.205158673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4260026.515151516,
            "unit": "ns",
            "range": "± 133172.29358126665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4538235.153846154,
            "unit": "ns",
            "range": "± 75726.5619821805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5458196,
            "unit": "ns",
            "range": "± 119393.0218494085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4886356.013157895,
            "unit": "ns",
            "range": "± 234332.21255419942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8209742.465753425,
            "unit": "ns",
            "range": "± 388135.48457032524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6081055.6703125,
            "unit": "ns",
            "range": "± 27405.938161123355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924665.5227864583,
            "unit": "ns",
            "range": "± 2301.8327417974665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1319475.4352864583,
            "unit": "ns",
            "range": "± 1181.6672925375144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3159056.7530691964,
            "unit": "ns",
            "range": "± 4624.626658063477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000314.248046875,
            "unit": "ns",
            "range": "± 604.6864858034851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 914083.9102313702,
            "unit": "ns",
            "range": "± 610.9341031082641"
          }
        ]
      }
    ]
  }
}