window.BENCHMARK_DATA = {
  "lastUpdate": 1688029083818,
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
          "id": "0bd22b8deafcf87e5fad43b9a49cc9c73e5bf719",
          "message": "Prepare 2.3.1",
          "timestamp": "2023-06-29T15:22:24+09:00",
          "tree_id": "6f08e98fa366bfb1d100cf7f23172cbaf3198b47",
          "url": "https://github.com/greymistcube/libplanet/commit/0bd22b8deafcf87e5fad43b9a49cc9c73e5bf719"
        },
        "date": 1688021152259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12833546.544444444,
            "unit": "ns",
            "range": "± 4389609.270974241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29342391.44680851,
            "unit": "ns",
            "range": "± 6561281.293464461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65615656.65116279,
            "unit": "ns",
            "range": "± 11237733.541216983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144929480.4347826,
            "unit": "ns",
            "range": "± 41799392.35393908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254342321.6368421,
            "unit": "ns",
            "range": "± 42582273.979550816"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80327.8373493976,
            "unit": "ns",
            "range": "± 5509.691426615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368089.1404494382,
            "unit": "ns",
            "range": "± 41563.79377706012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348840.1777777778,
            "unit": "ns",
            "range": "± 29762.53661709248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337516.77777777775,
            "unit": "ns",
            "range": "± 14183.920163162527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4481982.429292929,
            "unit": "ns",
            "range": "± 299722.95578223886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4151475.7422680412,
            "unit": "ns",
            "range": "± 277925.50793187966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26823.533333333333,
            "unit": "ns",
            "range": "± 2918.6443499633574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130945.17204301075,
            "unit": "ns",
            "range": "± 16935.09405605622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127771.42352941177,
            "unit": "ns",
            "range": "± 8003.964843953858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140526.2365591398,
            "unit": "ns",
            "range": "± 24864.176768997462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9234.273195876289,
            "unit": "ns",
            "range": "± 1204.0382097442152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25573.92391304348,
            "unit": "ns",
            "range": "± 2908.8039921034256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1835750.1612903227,
            "unit": "ns",
            "range": "± 251928.88659243105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3666708.5459770113,
            "unit": "ns",
            "range": "± 731289.0834423493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2999942.611111111,
            "unit": "ns",
            "range": "± 471793.2007330331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7045139.779069767,
            "unit": "ns",
            "range": "± 781620.2272057952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3627036.6,
            "unit": "ns",
            "range": "± 329885.3436522072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4012747.5,
            "unit": "ns",
            "range": "± 719441.3286458649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5168975.449438202,
            "unit": "ns",
            "range": "± 665636.9812355239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5366077.173913044,
            "unit": "ns",
            "range": "± 1026671.4925506228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8354855.531914894,
            "unit": "ns",
            "range": "± 607649.6350331218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9860642.673788264,
            "unit": "ns",
            "range": "± 2472164.1106826863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2476027.307532269,
            "unit": "ns",
            "range": "± 274553.3848944007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1404148.7933728448,
            "unit": "ns",
            "range": "± 60670.69323357509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2777682.487375161,
            "unit": "ns",
            "range": "± 214361.17981286082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 912187.1604817709,
            "unit": "ns",
            "range": "± 33098.5540046647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780650.1455965909,
            "unit": "ns",
            "range": "± 19138.245334510288"
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
          "id": "dc1329ba84fdfe79a5770d28695f5f0f33b54344",
          "message": "Prepare 2.3.1",
          "timestamp": "2023-06-29T17:42:26+09:00",
          "tree_id": "bfca3d30a84afe1d5b5d13b8aebd4c855e88bec2",
          "url": "https://github.com/greymistcube/libplanet/commit/dc1329ba84fdfe79a5770d28695f5f0f33b54344"
        },
        "date": 1688029059258,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8065747.333333333,
            "unit": "ns",
            "range": "± 163752.2494545091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20403527.4375,
            "unit": "ns",
            "range": "± 383304.1096317594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49865301.53571428,
            "unit": "ns",
            "range": "± 1220840.53981829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99193605.5,
            "unit": "ns",
            "range": "± 1746845.6112831472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204797516.53333333,
            "unit": "ns",
            "range": "± 2628059.50929146"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58915.40425531915,
            "unit": "ns",
            "range": "± 9785.203615245297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302132.10638297873,
            "unit": "ns",
            "range": "± 20255.409425482798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282248.5759493671,
            "unit": "ns",
            "range": "± 13878.952491112865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272714.09,
            "unit": "ns",
            "range": "± 21779.53323469332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4511296.875,
            "unit": "ns",
            "range": "± 80212.34501486248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3585916.7666666666,
            "unit": "ns",
            "range": "± 105700.44822726004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16306.870588235293,
            "unit": "ns",
            "range": "± 1320.25978493624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84851.37234042553,
            "unit": "ns",
            "range": "± 10011.14343955768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76364.55555555556,
            "unit": "ns",
            "range": "± 6520.802696437583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97197.0824742268,
            "unit": "ns",
            "range": "± 13837.877576653887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5946.18085106383,
            "unit": "ns",
            "range": "± 1079.9975130672876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15699.35393258427,
            "unit": "ns",
            "range": "± 1228.1710862327864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599499.3383838383,
            "unit": "ns",
            "range": "± 164368.41130234007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2908419.846153846,
            "unit": "ns",
            "range": "± 162014.17252182486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2500607.7010309277,
            "unit": "ns",
            "range": "± 216005.95790337224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6307715.268115942,
            "unit": "ns",
            "range": "± 292158.4050635356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3310473.8,
            "unit": "ns",
            "range": "± 233533.55343671437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3286034.813432836,
            "unit": "ns",
            "range": "± 149722.9745246917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4232505.979591837,
            "unit": "ns",
            "range": "± 168687.41179070066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4209493.730769231,
            "unit": "ns",
            "range": "± 158011.6596652329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7491897.080645162,
            "unit": "ns",
            "range": "± 337400.9916078259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6149136.0984375,
            "unit": "ns",
            "range": "± 87738.41234263363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1853293.9264322917,
            "unit": "ns",
            "range": "± 30577.08182671615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1276220.2139322916,
            "unit": "ns",
            "range": "± 15645.626733693256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642934.4779947917,
            "unit": "ns",
            "range": "± 47397.84549791495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853022.1579318576,
            "unit": "ns",
            "range": "± 17193.84827968651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717590.4720052084,
            "unit": "ns",
            "range": "± 9385.401713468107"
          }
        ]
      }
    ]
  }
}