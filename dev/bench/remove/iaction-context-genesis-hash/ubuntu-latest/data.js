window.BENCHMARK_DATA = {
  "lastUpdate": 1684156084744,
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
          "id": "47384ac69f530d740859ccfb4d3bfbe884659489",
          "message": "Changelog",
          "timestamp": "2023-05-15T21:54:43+09:00",
          "tree_id": "5a37f7a7746f259af0f2f02ae578abf5c46319a2",
          "url": "https://github.com/greymistcube/libplanet/commit/47384ac69f530d740859ccfb4d3bfbe884659489"
        },
        "date": 1684156077639,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3291292.4166666665,
            "unit": "ns",
            "range": "± 84655.74380262312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528761.9032258065,
            "unit": "ns",
            "range": "± 107344.97712774915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4259200.166666667,
            "unit": "ns",
            "range": "± 108363.55011504667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4393004.2,
            "unit": "ns",
            "range": "± 130138.79105557612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6804414.892857143,
            "unit": "ns",
            "range": "± 194884.38944045955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284493.4857142857,
            "unit": "ns",
            "range": "± 8419.021468819103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272786.11627906974,
            "unit": "ns",
            "range": "± 9991.461926992377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252342.3,
            "unit": "ns",
            "range": "± 9700.638176460985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4462671.4,
            "unit": "ns",
            "range": "± 82056.06068919328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3991522.2666666666,
            "unit": "ns",
            "range": "± 63726.49456686718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18518.22105263158,
            "unit": "ns",
            "range": "± 1166.0028573643629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90465.64102564103,
            "unit": "ns",
            "range": "± 4660.363569158161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77321.90410958904,
            "unit": "ns",
            "range": "± 3847.544177655489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95051.52083333333,
            "unit": "ns",
            "range": "± 14638.912537968736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5171.551020408163,
            "unit": "ns",
            "range": "± 671.0285707262447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19411.064516129034,
            "unit": "ns",
            "range": "± 1317.5893815605536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5942088.7890625,
            "unit": "ns",
            "range": "± 56275.2831829426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1877560.7407924107,
            "unit": "ns",
            "range": "± 4770.884845089698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353901.7662760417,
            "unit": "ns",
            "range": "± 5038.819471930926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623369.9241071427,
            "unit": "ns",
            "range": "± 4785.670138079487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821265.62890625,
            "unit": "ns",
            "range": "± 876.2209977416144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765396.9573567709,
            "unit": "ns",
            "range": "± 379.50399894062565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7787970.642857143,
            "unit": "ns",
            "range": "± 64695.12520882632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21730145.133333333,
            "unit": "ns",
            "range": "± 210953.59946404825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54421696.166666664,
            "unit": "ns",
            "range": "± 1091432.5192108091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105918590,
            "unit": "ns",
            "range": "± 1754396.9717603824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211755202.5909091,
            "unit": "ns",
            "range": "± 5197564.416747948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437539.058139535,
            "unit": "ns",
            "range": "± 77848.59984964097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2759172.512195122,
            "unit": "ns",
            "range": "± 92792.22099484471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2341088.777777778,
            "unit": "ns",
            "range": "± 125735.60549791611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5571940.655172414,
            "unit": "ns",
            "range": "± 144344.16802145288"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49171.35227272727,
            "unit": "ns",
            "range": "± 2681.451957170865"
          }
        ]
      }
    ]
  }
}