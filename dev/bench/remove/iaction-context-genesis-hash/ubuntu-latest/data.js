window.BENCHMARK_DATA = {
  "lastUpdate": 1684155927221,
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
          "id": "01bd4c5391da7022b66b58765776ae29d625d812",
          "message": "Removed IActionContext.GenesisHash",
          "timestamp": "2023-05-15T21:44:10+09:00",
          "tree_id": "8a6032b5d34baaf40369f884b9f534f1e8f0171a",
          "url": "https://github.com/greymistcube/libplanet/commit/01bd4c5391da7022b66b58765776ae29d625d812"
        },
        "date": 1684155919514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3538087.611111111,
            "unit": "ns",
            "range": "± 71148.09032627061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3823476.5833333335,
            "unit": "ns",
            "range": "± 99002.91986906977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4665736,
            "unit": "ns",
            "range": "± 72005.92616352258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4635998.071428572,
            "unit": "ns",
            "range": "± 66488.30055958866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7205346.766666667,
            "unit": "ns",
            "range": "± 186551.07978443004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288618.6567164179,
            "unit": "ns",
            "range": "± 13102.497170678711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277278.2195121951,
            "unit": "ns",
            "range": "± 9722.714902516156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251713.69090909092,
            "unit": "ns",
            "range": "± 10612.493569989287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4487359.214285715,
            "unit": "ns",
            "range": "± 32905.55400204225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4106135.2,
            "unit": "ns",
            "range": "± 47409.63280991984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19571.736263736264,
            "unit": "ns",
            "range": "± 1432.084470158911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98131.58163265306,
            "unit": "ns",
            "range": "± 7305.752427676736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79942.34736842105,
            "unit": "ns",
            "range": "± 5087.961611173469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105590.66326530612,
            "unit": "ns",
            "range": "± 13024.845338887353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6587.742268041237,
            "unit": "ns",
            "range": "± 899.9191894084911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20550.905263157896,
            "unit": "ns",
            "range": "± 1958.7340086038646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5907716.4328125,
            "unit": "ns",
            "range": "± 58368.72212967988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869915.8895089286,
            "unit": "ns",
            "range": "± 2373.540490616819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362257.3165457589,
            "unit": "ns",
            "range": "± 2804.2776168364903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618971.585677083,
            "unit": "ns",
            "range": "± 1993.8060034347207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822322.7361778846,
            "unit": "ns",
            "range": "± 438.11184196990644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761719.0423677885,
            "unit": "ns",
            "range": "± 274.1739136776397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7930300.25,
            "unit": "ns",
            "range": "± 260540.4625766957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21790142.64285714,
            "unit": "ns",
            "range": "± 132296.53124390802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55130772.2,
            "unit": "ns",
            "range": "± 375752.3237063782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110618908,
            "unit": "ns",
            "range": "± 480399.53038323065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220092156.4,
            "unit": "ns",
            "range": "± 2019227.2581108774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1521648.663265306,
            "unit": "ns",
            "range": "± 98171.4402220788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2894748.72,
            "unit": "ns",
            "range": "± 114259.51415269452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2349288.609375,
            "unit": "ns",
            "range": "± 98092.2812879462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5695698.125,
            "unit": "ns",
            "range": "± 144712.60872090512"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52014.778947368424,
            "unit": "ns",
            "range": "± 4527.132357992873"
          }
        ]
      }
    ]
  }
}