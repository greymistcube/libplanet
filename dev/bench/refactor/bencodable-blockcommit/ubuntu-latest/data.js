window.BENCHMARK_DATA = {
  "lastUpdate": 1679039998128,
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
          "id": "8bdcf2943248ad564bb640786cccf2405d470018",
          "message": "Implemented IBencodable for BlockCommit",
          "timestamp": "2023-03-17T14:20:23+09:00",
          "tree_id": "76831a6c51a007ca9ff79824232395c3d299955c",
          "url": "https://github.com/greymistcube/libplanet/commit/8bdcf2943248ad564bb640786cccf2405d470018"
        },
        "date": 1679031192431,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3295013.933333333,
            "unit": "ns",
            "range": "± 34076.040685222695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5232525.6,
            "unit": "ns",
            "range": "± 61128.00321082684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23616993.64285714,
            "unit": "ns",
            "range": "± 194162.88343418785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6325036.214285715,
            "unit": "ns",
            "range": "± 62819.81580334293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27026331.533333335,
            "unit": "ns",
            "range": "± 214625.8034356762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7840171.4,
            "unit": "ns",
            "range": "± 56672.17424526533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19729819.466666665,
            "unit": "ns",
            "range": "± 38172.41492578989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50941182.35714286,
            "unit": "ns",
            "range": "± 119230.94321500423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101972293.66666667,
            "unit": "ns",
            "range": "± 384173.52696324734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203152624.86666667,
            "unit": "ns",
            "range": "± 443618.4682621618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1400100.7857142857,
            "unit": "ns",
            "range": "± 100888.44162954517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2504241.6666666665,
            "unit": "ns",
            "range": "± 58863.02750906832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2166448.593023256,
            "unit": "ns",
            "range": "± 117359.63579631707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5032131.7727272725,
            "unit": "ns",
            "range": "± 117833.51579116951"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46869.717647058824,
            "unit": "ns",
            "range": "± 2544.239008743763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5981574.76171875,
            "unit": "ns",
            "range": "± 13038.348433466968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1999405.4502604166,
            "unit": "ns",
            "range": "± 2126.6107857575835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349418.5834635417,
            "unit": "ns",
            "range": "± 684.6031389477511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610454.43046875,
            "unit": "ns",
            "range": "± 2540.1152617020325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864202.469140625,
            "unit": "ns",
            "range": "± 9972.400525179866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736066.5195963542,
            "unit": "ns",
            "range": "± 364.59633401507614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205243.15789473685,
            "unit": "ns",
            "range": "± 6942.365678761001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198072.2105263158,
            "unit": "ns",
            "range": "± 8602.718963329562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171584.6511627907,
            "unit": "ns",
            "range": "± 5899.748509102178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11619226.533333333,
            "unit": "ns",
            "range": "± 57782.622702760076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9710524.642857144,
            "unit": "ns",
            "range": "± 55107.67837551824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20050.933333333334,
            "unit": "ns",
            "range": "± 1134.8560152199482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57195.364583333336,
            "unit": "ns",
            "range": "± 4920.726499891297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39562.208333333336,
            "unit": "ns",
            "range": "± 829.8986307488648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97758.65625,
            "unit": "ns",
            "range": "± 12007.016753661059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5467.484536082474,
            "unit": "ns",
            "range": "± 636.0960867111271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19808.41489361702,
            "unit": "ns",
            "range": "± 1548.842970233736"
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
          "id": "573329a37a0f1d1b50a64f53c1b9f4fbf9daebc1",
          "message": "Changelog",
          "timestamp": "2023-03-17T14:24:13+09:00",
          "tree_id": "7ea7e3f86089b040e6aaee7163058da70e2643e0",
          "url": "https://github.com/greymistcube/libplanet/commit/573329a37a0f1d1b50a64f53c1b9f4fbf9daebc1"
        },
        "date": 1679031419113,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3256942.3333333335,
            "unit": "ns",
            "range": "± 84155.94951644531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5099346.642857143,
            "unit": "ns",
            "range": "± 83258.47876213999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23894287.086956523,
            "unit": "ns",
            "range": "± 590634.4400987893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6443811.107142857,
            "unit": "ns",
            "range": "± 184424.60317738584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28175377.266666666,
            "unit": "ns",
            "range": "± 424394.52309520857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7689931.333333333,
            "unit": "ns",
            "range": "± 28500.12624951151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20700153.266666666,
            "unit": "ns",
            "range": "± 354677.7142875057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59069799,
            "unit": "ns",
            "range": "± 1024463.8528727391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103717968.38461539,
            "unit": "ns",
            "range": "± 1031224.7077769988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 206779253.2,
            "unit": "ns",
            "range": "± 4603602.3957690215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352440.4680851065,
            "unit": "ns",
            "range": "± 86275.4532749614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2536083.1481481483,
            "unit": "ns",
            "range": "± 70425.53948877424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2173590.582278481,
            "unit": "ns",
            "range": "± 110884.91410982734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5580235.58,
            "unit": "ns",
            "range": "± 361168.17132284865"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49059.019230769234,
            "unit": "ns",
            "range": "± 2019.7817537932804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5938689.184895833,
            "unit": "ns",
            "range": "± 34109.69300349887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825078.1786458334,
            "unit": "ns",
            "range": "± 6176.1980931146745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336170.3194754464,
            "unit": "ns",
            "range": "± 4030.988110415203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619617.08046875,
            "unit": "ns",
            "range": "± 8746.66578130571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817092.4138532366,
            "unit": "ns",
            "range": "± 1340.5296978820083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753022.1596354167,
            "unit": "ns",
            "range": "± 1972.2128648841638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199085.7037037037,
            "unit": "ns",
            "range": "± 5507.065977275257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194822.7619047619,
            "unit": "ns",
            "range": "± 6611.862266022699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177974.56565656565,
            "unit": "ns",
            "range": "± 11777.490897471878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12057532.827586208,
            "unit": "ns",
            "range": "± 348915.8008768089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9616186.266666668,
            "unit": "ns",
            "range": "± 146970.83456176246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20035.78888888889,
            "unit": "ns",
            "range": "± 1228.7855747196907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53357.0125,
            "unit": "ns",
            "range": "± 2803.5990138073444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41040.76,
            "unit": "ns",
            "range": "± 752.8248069770283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92056.96666666666,
            "unit": "ns",
            "range": "± 10348.376919306958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5452.68556701031,
            "unit": "ns",
            "range": "± 455.2108561310011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19396.945054945056,
            "unit": "ns",
            "range": "± 1526.8244922979293"
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
          "id": "1af80b249526dc8def67cc29607c9aeacbe5b853",
          "message": "Changelog",
          "timestamp": "2023-03-17T16:46:28+09:00",
          "tree_id": "7a0907c438012591008e907aab2715fd36c87c2e",
          "url": "https://github.com/greymistcube/libplanet/commit/1af80b249526dc8def67cc29607c9aeacbe5b853"
        },
        "date": 1679039991364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3382918.1842105263,
            "unit": "ns",
            "range": "± 116075.96521520217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5308414,
            "unit": "ns",
            "range": "± 231715.2193107102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25853860.181818184,
            "unit": "ns",
            "range": "± 619573.7301472941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6348690.740740741,
            "unit": "ns",
            "range": "± 174947.2215134506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27694582.076923076,
            "unit": "ns",
            "range": "± 747580.4798910106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7810065.8,
            "unit": "ns",
            "range": "± 80674.32041344649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21951049.64285714,
            "unit": "ns",
            "range": "± 128476.41205870447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54449124,
            "unit": "ns",
            "range": "± 761706.3044210895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108786426.4,
            "unit": "ns",
            "range": "± 1844374.5358807682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 215927207.8888889,
            "unit": "ns",
            "range": "± 5308371.154924668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1515188.5154639175,
            "unit": "ns",
            "range": "± 117142.4738686394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2779214.111111111,
            "unit": "ns",
            "range": "± 56652.67647889394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2389121.212121212,
            "unit": "ns",
            "range": "± 112565.44734570607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5518617.631578947,
            "unit": "ns",
            "range": "± 121499.23757246404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51841.372881355936,
            "unit": "ns",
            "range": "± 2295.8570250021885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5965418.6859375,
            "unit": "ns",
            "range": "± 29731.568082262154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847923.7237723214,
            "unit": "ns",
            "range": "± 3418.321886217982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367404.5278645833,
            "unit": "ns",
            "range": "± 3040.5287148787015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634041.8932291665,
            "unit": "ns",
            "range": "± 4903.535323124521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826141.7114257812,
            "unit": "ns",
            "range": "± 2115.1755406083303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766075.866796875,
            "unit": "ns",
            "range": "± 1098.3124421734167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199111.96296296295,
            "unit": "ns",
            "range": "± 8329.025037426294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200446.19672131148,
            "unit": "ns",
            "range": "± 9034.223995119286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177908.46391752578,
            "unit": "ns",
            "range": "± 11206.313219808526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12429490.94736842,
            "unit": "ns",
            "range": "± 274944.17462731793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9852160.26923077,
            "unit": "ns",
            "range": "± 268776.6772617829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20492.979166666668,
            "unit": "ns",
            "range": "± 1662.8944137077226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56300.79787234042,
            "unit": "ns",
            "range": "± 5505.124704533817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41513.1875,
            "unit": "ns",
            "range": "± 1641.2546142438093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97911.13829787234,
            "unit": "ns",
            "range": "± 15727.927148181907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5715.873684210526,
            "unit": "ns",
            "range": "± 601.6632132451282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20407.443298969072,
            "unit": "ns",
            "range": "± 1879.7685139458893"
          }
        ]
      }
    ]
  }
}